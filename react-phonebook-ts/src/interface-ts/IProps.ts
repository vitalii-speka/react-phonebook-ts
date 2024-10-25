import { ReactNode } from "react";

export interface IPropsChildren {
  children: ReactNode;
}

export interface IPropsAlert {
  text: boolean;
  alert: string | null;
  variant: string;
}
