import { BrowserRouter, Switch, Route } from '@hammerframework/hammer-web'

import HomePage from './pages/HomePage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
