import { useEffect } from "react";
import { Route } from "react-router-dom";

import { useAuth0 } from "./";

const SecureRoute = ({ path, ...rest }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  return <Route path={path} {...rest} />;
};

export default SecureRoute;
