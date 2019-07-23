import { GraphQLProvider, createClient } from "@hammerframework/hammer-web";

export { Auth0Provider, useAuth0 } from "./Auth0Provider";
export { default as SecureRoute } from "./SecureRoute";

export const GraphQLWithAuth0Provider = ({ audience, ...rest }) => {
  return (
    <GraphQLProvider
      client={createClient({
        fetchOptions: async () => {
          const token = await useAuth0().getTokenSilently({ audience });
          return {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
        }
      })}
      {...rest}
    />
  );
};
