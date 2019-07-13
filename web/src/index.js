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
          domain: "p4p8.eu.auth0.com",
          client_id: "b7vN4sVz6yjGrq82ctXJW9NRTvlWzkFU",
          audience: "BILLABLE_API"
        }}
      >
        <Routes />
      </Auth0Provider>
    </ThemeProvider>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
