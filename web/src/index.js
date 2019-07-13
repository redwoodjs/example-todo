import ReactDOM from "react-dom";
import { GraphQLProvider } from "@hammerframework/hammer-web";
import { ThemeProvider } from "styled-components";

import { Auth0Provider } from "src/lib/auth0";

import theme from "src/lib/theme";
import Routes from "src/pages/Routes";

import "./index.css";

ReactDOM.render(
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        config={{
          domain: process.env.AUTH0_DOMAIN,
          client_id: process.env.AUTH0_CLIENT_ID,
          audience: process.env.AUDIENCE,
          redirect_uri: window.location.origin
        }}
      >
        <Routes />
      </Auth0Provider>
    </ThemeProvider>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
