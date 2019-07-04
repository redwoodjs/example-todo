import ReactDOM from "react-dom";
import { GraphQLProvider } from "@hammerframework/hammer-web";
import { ThemeProvider } from "styled-components";

import "./global.css";
import theme from "src/lib/theme";
import InvoicePage from "src/pages";

// TODO: Add Router
ReactDOM.render(
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <InvoicePage />
    </ThemeProvider>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
