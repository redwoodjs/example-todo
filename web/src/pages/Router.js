import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SecureRoute } from "src/lib/auth0";

import InvoicePage from "./InvoicePage";
import Profile from "./Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InvoicePage} />
        <SecureRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
