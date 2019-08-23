import ReactDOM from "react-dom";
import { HammerProvider } from "@hammerframework/hammer-web";
import { initAuth } from "@hammerframework/hammer-auth-auth0";

import theme from "src/lib/theme";
import Routes from "src/pages/Routes";

import "./index.css";

ReactDOM.render(
  <HammerProvider theme={theme}>
    <Routes />
  </HammerProvider>,
  document.getElementById("hammer-app")
);
