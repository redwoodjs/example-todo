import { useEffect, useState } from "react";
import { createClient, GraphQLProvider } from "@hammerframework/hammer-web";

import { Auth0Provider, useAuth0 } from "./Auth0Provider";
import { default as SecureRoute } from "./SecureRoute";

export const Auth0GraphQLProvider = props => {
  const [client, setClient] = useState();
  const { isAuthenticated, getTokenSilently } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      const token = await getTokenSilently();
      setClient(
        createClient({
          fetchOptions: {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        })
      );
    };
    isAuthenticated && fn();
  }, [isAuthenticated]);
  return <GraphQLProvider client={client} {...props} />;
};

export { Auth0Provider, useAuth0, SecureRoute };
