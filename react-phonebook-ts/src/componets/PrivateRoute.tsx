import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import paths from "../paths";
import { useAuth } from "../hooks";
import { IPropsRoute } from "interface-ts/IProps";

const PrivateRoute: FC<IPropsRoute> = ({ component: Component }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? Component : <Navigate to={paths.login} state={location} />;
};

export default PrivateRoute;
