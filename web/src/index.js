import ReactDOM from "react-dom";
import { GraphQLProvider } from "@hammerframework/hammer-web";
import { ThemeProvider } from "styled-components";

import theme from "src/lib/theme";
import Router from "src/pages/Router";

import "./index.css";

ReactDOM.render(
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
