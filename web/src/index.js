import ReactDOM from 'react-dom'
import { HammerProvider } from '@hammerframework/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import FatalErrorBoundary from 'src/lib/FatalErrorBoundary'

import Routes from './Routes'

import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <HammerProvider>
      <Routes />
    </HammerProvider>
  </FatalErrorBoundary>,
  document.getElementById('hammer-app')
)
