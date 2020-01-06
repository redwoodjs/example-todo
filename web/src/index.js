import ReactDOM from 'react-dom'
import { RedwoodProvider } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import FatalErrorBoundary from 'src/lib/FatalErrorBoundary'

import Routes from './Routes'

import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('hammer-app')
)
