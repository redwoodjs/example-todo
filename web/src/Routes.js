import HomePage from 'src/pages/HomePage'
import { Router, Route } from 'src/lib/HammerRouter'
import NotFoundPage from 'src/pages/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
