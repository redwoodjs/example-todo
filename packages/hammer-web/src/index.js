import React from "react";
import gql from "graphql-tag";
import {
  Provider as RealProvider,
  createClient as realCreateClient
} from "urql";

export { useMutation, useQuery } from "urql";
export { default as Query } from "./graphql/Query";
export { gql };

const DEFAULT_CLIENT_CONFIG = {
  url: `${__HAMMER__.apiProxyPath}/graphql`
};

export const createClient = config =>
  realCreateClient({ ...DEFAULT_CLIENT_CONFIG, ...config });

export const GraphQLProvider = ({ client = createClient(), ...rest }) => {
  return <RealProvider value={client} {...rest} />;
};
