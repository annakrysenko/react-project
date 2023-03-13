пшеexport const getUserName = state => state.auth.user.name;
export const getIsLoading = state => state.auth.isLoading;
export const getIsErrorAuth = state => state.auth.error;
export const getIsLoggedIn = state => (state.auth.accessToken = true);