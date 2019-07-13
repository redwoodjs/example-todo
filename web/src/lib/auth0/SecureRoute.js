import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import { useAuth0 } from "./";

const SecureRoute = ({ component: Component, path, ...rest }) => {
  const {
    loading: authLoading,
    isAuthenticated,
    loginWithRedirect
  } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    // wait for loading to complete loading before redirecting
    // the user.
    !authLoading && fn();
  }, [authLoading, isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default SecureRoute;
