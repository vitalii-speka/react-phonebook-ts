import { RootState } from '../store';

export const selectisRegisterIn = (state: RootState) => {
  return state.auth.isRegisterIn;
};
export const selectIsLoading = (state: RootState) => {
  return state.auth.isLoading;
};
export const selectIsLoggedIn = (state: RootState) => {
  return state.auth.isLoggedIn;
};
export const selectIsToken = (state: RootState) => {
  return state.auth.token;
};
export const selectUser = (state: RootState) => {
  return state.auth.user;
};
export const selectIsRefreshing = (state: RootState) => {
  return state.auth.isRefreshing;
};
export const selectIsError = (state: RootState) => {
  return state.auth.error;
};
