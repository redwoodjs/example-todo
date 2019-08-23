import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { GraphQLProvider as RealGraphQLProvider } from "src/graphql";

let USE_AUTH;
export const useAuth = () => {
  return USE_AUTH();
};

const HammerProvider = ({ auth = {}, theme = {}, children }) => {
  const AuthProvider = auth.AuthProvider;
  const GraphQLProvider = auth.GraphQLProvider || RealGraphQLProvider;

  USE_AUTH = auth.useAuth;

  return (
    <GraphQLProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GraphQLProvider>
  );
};

HammerProvider.propTypes = {
  auth: PropTypes.shape({
    AuthProvider: PropTypes.func.isRequired,
    useAuth: PropTypes.func.isRequired,
    GraphQLProvider: PropTypes.func.isRequired
  }),
  client: PropTypes.func,
  theme: PropTypes.object
};

export default HammerProvider;
