import * as urql from "urql";

const DEFAULT_CLIENT_CONFIG = {
  url: `${__HAMMER__.apiProxyPath}/graphql`
};

export const createGraphQLClient = config =>
  urql.createClient({ ...DEFAULT_CLIENT_CONFIG, ...config });

export const GraphQLProvider = ({
  client = createGraphQLClient(),
  ...rest
}) => {
  return <urql.Provider value={client} {...rest} />;
};
