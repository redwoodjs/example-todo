import ReactDOM from "react-dom";

import { Auth0Provider, GraphQLWithAuth0Provider } from "src/lib/auth0";

import { ThemeProvider } from "styled-components";

import theme from "src/lib/theme";
import Routes from "src/pages/Routes";

import "./index.css";

ReactDOM.render(
  <Auth0Provider
    config={{
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      audience: process.env.AUDIENCE,
      redirect_uri: window.location.origin
    }}
  >
    <GraphQLWithAuth0Provider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GraphQLWithAuth0Provider>
  </Auth0Provider>,
  document.getElementById("hammer-app")
);
