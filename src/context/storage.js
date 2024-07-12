let userData = null;

const initUserData = () => {
    return {
        language: 'en-us'
    };
};

const getUserData = () => {
    if (!userData) {
        userData = JSON.parse(localStorage.getItem('user-data'));
        if (!userData) {
            userData = initUserData();
            saveUserData(userData);
        }
    }
    return userData;
};

const saveUserData = () => {
    localStorage.setItem('user-data', JSON.stringify(userData));
};

export const getLanguage = () => {
    const ud = getUserData();
    return (ud?.language) ? ud.language : 'en-us';
};

export const getJwt = () => {
    const ud = getUserData();
    return ud?.jwt;
};

export const setJwt = (jwt) => {
    const ud = getUserData();
    ud['jwt'] = jwt;
    saveUserData(ud);
};