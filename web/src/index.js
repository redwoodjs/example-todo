import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  Auth0Provider,
  Auth0GraphQLProvider
} from "@hammerframework/hammer-auth-auth0";

import theme from "src/lib/theme";
import Routes from "src/pages/Routes";

import "./index.css";

ReactDOM.render(
  <Auth0Provider
    config={{
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin
    }}
  >
    <Auth0GraphQLProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Auth0GraphQLProvider>
  </Auth0Provider>,
  document.getElementById("hammer-app")
);
