import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SecureRoute } from "@hammerframework/hammer-auth-auth0";

import InvoicePage from "./InvoicePage";
import Profile from "./Profile";
import Test from "./Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InvoicePage} />
        <SecureRoute path="/profile" component={Profile} />
        <SecureRoute path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
