import ReactDOM from "react-dom";
import { GraphQLProvider, Query } from "@hammerframework/hammer-web";

import "./global.css";
import Help from "src/components/Help";
import InvoicePage from "src/pages";

// TODO: Add Router
ReactDOM.render(
  <GraphQLProvider>
    <InvoicePage />
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
