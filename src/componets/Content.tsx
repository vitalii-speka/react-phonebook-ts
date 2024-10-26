import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import LinearIndeterminate from "./spiner/LinearIndeterminate";
import PrivateRoute from "./PrivateRoute";
import paths from "../paths";
import { useAuth } from "../hooks/useAuth";
import { refreshCurrentUser } from "../redux/auth/operations";
import { AppDispatch } from "redux/store";
import { PublicRoute } from "./PublicRoute";
import { PublicRouteRegist } from "./PublicRouteRegist";

const HomePage = lazy(() => import("../views/HomePage/HomePage"));
const LoginPage = lazy(() => import("../views/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../views/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("../views/ContactsPage/ContactsPage"));

const Content = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(refreshCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <Suspense fallback={<LinearIndeterminate />}>
      <Routes>
        <Route path={paths.home}>
          <Route index element={<HomePage />} />
          <Route
            path={paths.contacts}
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Route>

        <Route
          path={paths.register}
          element={
            <Suspense fallback={<LinearIndeterminate />}>
              <PublicRouteRegist component={<RegisterPage />} />
            </Suspense>
          }
        />
        <Route
          path={paths.login}
          element={
            <Suspense fallback={<LinearIndeterminate />}>
              <PublicRoute component={<LoginPage />} />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Content;

/* routes.map from '../routes'  
import routes from '../routes';

 {routes.map(({ component: Component, ...route }) =>
          route.private ? (
            <PrivateRoute key={route.name} {...route}>
              <Component />
            </PrivateRoute>
          ) : (
            <PublicRoute key={route.name} {...route}>
              <Component />
            </PublicRoute>
          ),
        )}
        <Navigate to={paths.home} />
*/
