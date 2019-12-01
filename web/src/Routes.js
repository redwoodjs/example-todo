import HomePage from 'src/pages/HomePage'

import { Router, Route } from 'src/lib/HammerRouter'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} />
      <Route path="/todo/:id/:id2" page={HomePage} />
    </Router>
  )
}

export default Routes
