import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import paths from "../paths";
import { useAuth } from "../hooks";
import { IPropsRoute } from "interface-ts/IProps";

export const PublicRouteRegist: FC<IPropsRoute> = ({ component: Component }) => {
  const { isRegisterIn } = useAuth();
  const { state } = useLocation();
  return !isRegisterIn ? (
    Component
  ) : (
    <Navigate to={state ? state : paths.login} />
  );
};