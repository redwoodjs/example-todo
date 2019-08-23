import {
  BrowserRouter,
  Switch,
  AnonRoute,
  AuthRoute
} from "@hammerframework/hammer-web";

import HomePage from "./HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AnonRoute path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
