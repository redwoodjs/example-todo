import React, { useEffect } from "react";
import { BrowserRouter, Route as AnonRoute, Switch } from "react-router-dom";
import { useAuth } from "./HammerProvider";

export const AuthRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    !loading && fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <AnonRoute path={path} render={render} {...rest} />;
};

export { BrowserRouter, Switch, AnonRoute };
