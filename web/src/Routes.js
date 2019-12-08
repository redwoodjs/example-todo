import { BrowserRouter, Switch, Route } from '@hammerframework/web'
import HomePage from 'src/pages/HomePage'
import Typescript from 'src/pages/Typescript'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/typescript" exact component={Typescript} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
