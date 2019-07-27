import { useEffect, useState } from "react";
import {
  createGraphQLCLient,
  GraphQLProvider as RealGraphQlProvider
} from "@hammerframework/hammer-web";

import { Auth0Provider, useAuth0 } from "./Auth0Provider";
import { default as SecureRoute } from "./SecureRoute";

export const GraphQLProvider = props => {
  const [client, setClient] = useState();
  const { isAuthenticated, getTokenSilently } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      const token = await getTokenSilently();
      setClient(
        createGraphQLCLient({
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
  return <RealGraphQlProvider client={client} {...props} />;
};

export { Auth0Provider, useAuth0, SecureRoute };

export const initAuth = config => {
  return {
    Provider: props => <Auth0Provider config={config} {...props} />,
    GraphQLProvider
  };
};
