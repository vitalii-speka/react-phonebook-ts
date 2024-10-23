export interface IContact {
  name: string;
  number: string | number;
  _id?: string;
  id?: string;
}

export interface IContactState {
  items: IContact[];
  filter: string;
  isLoading: boolean;
  error: null | string;
}

export interface IContactObj {
  id?: string;
  name: string;
  number: string;
}

