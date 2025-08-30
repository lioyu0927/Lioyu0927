import { auth, onAuthStateChanged, saveUserSettings, getUserSettings } from './Firebase.js';

let currentUser = null;
let userSettings = null;

// 사용자 인증 상태 변경 감지
onAuthStateChanged(auth, async(user) => {
    if (user) {
        currentUser = user;
        // 사용자 설정 불러오기
        userSettings = await getUserSettings(user.uid);
        if (!userSettings) {
            // 기본 설정 생성
            userSettings = {
                theme: 'light',
                fontSize: 'medium',
                notifications: true,
                // 필요한 다른 설정들 추가
            };
            // 새로운 설정 저장
            await saveUserSettings(user.uid, userSettings);
        }
        applyUserSettings(userSettings);
    } else {
        currentUser = null;
        userSettings = null;
        // 기본 설정으로 되돌리기
        resetToDefaultSettings();
    }
});

// 설정 변경 함수
export const updateSettings = async(newSettings) => {
    if (!currentUser) {
        console.error('사용자가 로그인되어 있지 않습니다.');
        return false;
    }

    try {
        userSettings = {...userSettings, ...newSettings };
        await saveUserSettings(currentUser.uid, userSettings);
        applyUserSettings(userSettings);
        return true;
    } catch (error) {
        console.error('설정 업데이트 중 오류 발생:', error);
        return false;
    }
};

// 설정 적용 함수
function applyUserSettings(settings) {
    if (!settings) return;

    // 테마 적용
    document.body.setAttribute('data-theme', settings.theme);

    // 글자 크기 적용
    document.body.style.fontSize = settings.fontSize;

    // 알림 설정 적용
    if (settings.notifications) {
        enableNotifications();
    } else {
        disableNotifications();
    }

    // 추가 설정들 적용...
}

// 기본 설정으로 초기화
function resetToDefaultSettings() {
    const defaultSettings = {
        theme: 'light',
        fontSize: 'medium',
        notifications: true
    };
    applyUserSettings(defaultSettings);
}

// 알림 관련 함수들
function enableNotifications() {
    // 알림 활성화 로직
}

function disableNotifications() {
    // 알림 비활성화 로직
}

// 현재 설정 가져오기
export const getCurrentSettings = () => userSettings;