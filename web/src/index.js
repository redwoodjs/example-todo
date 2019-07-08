import ReactDOM from "react-dom";
import { GraphQLProvider } from "@hammerframework/hammer-web";
import { ThemeProvider } from "styled-components";

import theme from "src/lib/theme";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
