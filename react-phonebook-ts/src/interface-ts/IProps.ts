import { ReactNode } from "react";

export interface IPropsChildren {
  children: ReactNode;
}

type VariantAlert =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
// info https://react-bootstrap.netlify.app/docs/components/alerts


export interface IPropsAlert {
  text?: boolean;
  alert: string | null;
  variant?: VariantAlert;
}
