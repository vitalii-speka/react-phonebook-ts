export interface IUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  subscription?: string | null;
  avatarURL?: string | null;
}

export interface IAuthState {
  isRegisterIn: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  token: string | null;
  user: IUser;
  isRefreshing: boolean;
  error: string | null;
}
