import React from "react";
import ReactDOM from "react-dom";

import { GraphQLProvider, Query } from "@hammerframework/hammer-web";

import "./global.css";

import Help from "src/components/Help";

ReactDOM.render(
  <GraphQLProvider>
    <Query {...Help.queryProps()}>
      {({ data }) => {
        return <Help>{data.help}</Help>;
      }}
    </Query>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
