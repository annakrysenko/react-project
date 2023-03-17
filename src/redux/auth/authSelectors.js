// export const getUserName = state => state.auth.user.name;
// export const getIsLoading = state => state.auth.isLoading;
// export const getIsErrorAuth = state => state.auth.error;
// export const getIsLoggedIn = state => (state.auth.accessToken = true);

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getAccessToken = state => state.auth.token;
export const getUserName = state => state.auth.userData.name;
export const getfetchCurrentUser = state => state.auth.isFetchingUser;
export const getIsRegistrated = state => state.auth.isRegistratedIn;
