import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import { createClient, Provider } from 'urql'

import Routes from './Routes'

import './index.css'

const client = createClient({ url: '/api/functions/graphql' })

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <Provider value={client}>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </Provider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
