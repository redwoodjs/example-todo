import ReactDOM from "react-dom";
import { HammerProvider } from "@hammerframework/hammer-web";
import { initAuth } from "@hammerframework/hammer-auth-auth0";

import theme from "src/lib/theme";
import Routes from "src/pages/Routes";

import "./index.css";

ReactDOM.render(
  <HammerProvider
    theme={theme}
    auth={initAuth({
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      audience: process.env.AUTH0_AUDIENCE,
      redirect_uri: window.location.origin
    })}
  >
    <Routes />
  </HammerProvider>,
  document.getElementById("hammer-app")
);
