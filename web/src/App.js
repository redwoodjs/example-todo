import ReactDOM from "react-dom";
import { GraphQLProvider, Query } from "@hammerframework/hammer-web";

import "./global.css";
import Help from "src/components/Help";

// TODO: Add Router
ReactDOM.render(
  <GraphQLProvider>
    <Query component={Help} />
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
