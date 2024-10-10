import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import paths from '../paths';
import { useAuth } from '../hooks';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { state } = useLocation();
  return !isLoggedIn ? children : <Navigate to={state ? state : paths.home} />;
};

export default PublicRoute;

/* 
export default function PublicRoute({ children, ...routeProps }) {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Route {...routeProps}>
        {isLoggedIn && routeProps.restricted ? (
          <Navigate to={paths.home} />
        ) : (
          children
        )}
      </Route>
    </>
  );
}
*/
