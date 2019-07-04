import ReactDOM from "react-dom";

import { GraphQLProvider, Query } from "@hammerframework/hammer-web";

import "./global.css";

import Help from "src/components/Help";

ReactDOM.render(
  <GraphQLProvider>
    <Query component={Help}>
      {({ data: { help } }) => {
        return <Help>{help}</Help>;
      }}
    </Query>
  </GraphQLProvider>,
  document.getElementById("hammer-app")
);
