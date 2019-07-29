import {
  BrowserRouter,
  Switch,
  AnonRoute,
  AuthRoute
} from "@hammerframework/hammer-web";

import InvoicePage from "./InvoicePage";
import Profile from "./Profile";
import Test from "./Test";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AnonRoute path="/" exact component={InvoicePage} />
        <AuthRoute path="/profile" component={Profile} />
        <AuthRoute path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
