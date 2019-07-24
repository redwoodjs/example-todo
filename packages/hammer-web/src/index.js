import React from "react";
import { Provider } from "urql";
import { createClient } from "urql";
import gql from "graphql-tag";

export { useMutation, useQuery } from "urql";
export { default as Query } from "./graphql/Query";
export { gql };

const DEFAULT_CLIENT_CONFIG = {
  url: "/.netlify/functions/graphql"
};

const newCreateClient = config =>
  createClient({ ...DEFAULT_CLIENT_CONFIG, ...config });
export { newCreateClient as createClient };

export const GraphQLProvider = ({ client = newCreateClient(), ...rest }) => (
  <Provider client={client} {...rest} />
);
