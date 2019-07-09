import ReactDOM from "react-dom";
import { GraphQLProvider } from "@hammerframework/hammer-web";
import { ThemeProvider } from "styled-components";

import { Auth0Provider } from "src/lib/auth0";

import theme from "src/lib/theme";
import Router from "src/pages/Router";

import "./index.css";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain="p4p8.eu.auth0.com"
        client_id="b7vN4sVz6yjGrq82ctXJW9NRTvlWzkFU"
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Router />
      </Auth0Provider>
    </ThemeProvider>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
