import React from "react";
import { Provider, createClient } from "urql";
export { useMutation, useQuery } from "urql";

export { default as Query } from "./graphql/Query";

export const client = createClient({
  url: "/.netlify/functions/graphql"
});

export const GraphQLProvider = props => <Provider value={client} {...props} />;
