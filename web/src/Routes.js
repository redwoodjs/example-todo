import HomePage from 'src/pages/HomePage'
import { Router, Route } from 'src/lib/HammerRouter'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} />
    </Router>
  )
}

export default Routes
