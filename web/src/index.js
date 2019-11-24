import ReactDOM from 'react-dom'
import { HammerProvider } from '@hammerframework/web'

import Routes from './Routes'

import './index.css'

ReactDOM.render(
  <HammerProvider>
    <Routes />
  </HammerProvider>,
  document.getElementById('hammer-app')
)
