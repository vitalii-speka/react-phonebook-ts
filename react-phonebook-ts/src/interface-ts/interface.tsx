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
