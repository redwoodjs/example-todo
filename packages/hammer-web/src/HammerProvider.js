import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { GraphQLProvider as RealGraphQLProvider } from "src/graphql";

const HammerProvider = ({ auth = {}, theme = {}, children }) => {
  const AuthProvider = auth.Provider || React.Fragment;
  const GraphQLProvider = auth.GraphQLProvider || RealGraphQLProvider;

  return (
    <AuthProvider>
      <GraphQLProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GraphQLProvider>
    </AuthProvider>
  );
};

HammerProvider.propTypes = {
  auth: PropTypes.shape({
    Provider: PropTypes.func.isRequired,
    GraphQLProvider: PropTypes.func.isRequired
  }),
  client: PropTypes.func,
  theme: PropTypes.object
};

export default HammerProvider;
