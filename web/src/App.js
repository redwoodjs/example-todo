import React from "react";
import ReactDOM from "react-dom";

import { GraphQLProvider } from "@hammerframework/hammer-web";

import "./global.css";

const App = () => "Hello, world!";

ReactDOM.render(
  <GraphQLProvider>
    <App />
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
