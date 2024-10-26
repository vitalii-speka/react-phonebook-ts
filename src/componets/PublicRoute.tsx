import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import paths from "../paths";
import { useAuth } from "../hooks";
import { IPropsRoute } from "interface-ts/IProps";

export const PublicRoute: FC<IPropsRoute> = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();
  const { state } = useLocation();
  return !isLoggedIn ? Component : <Navigate to={state ? state : paths.home} />;
};