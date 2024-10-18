export interface IUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  subscription?: string | null;
  avatarURL?: string | null;
}

export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isRegisterIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IContactObj {
  id?: string;
  name: string;
  number: string;
}

export interface IContacts {
  items: IContactObj[];
  filter: "";
  addLoader?: boolean;
  loader?: boolean;
  error?: any;
}

export interface IInitialState {
  isRegisterIn: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  token: string | null;
  user: {
    id: number | null;
    name: string | null;
    email: string | null;
    subscription: string | null;
    avatar: string | null;
  };
  isRefreshing: boolean;
  error: string | null;
}

// export interface IInitialState {
//   user: { name: string | null; email: string | null };
//   token: string | null;
//   isLoading?: boolean;
//   isLogIn: boolean;
//   error: string | null;
//   isFetchingCurrentUser: boolean;
// }

export interface IDataToPost {
  name?: string;
  email: string;
  password?: string;
}
