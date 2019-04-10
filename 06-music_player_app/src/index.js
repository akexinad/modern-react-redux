import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CreateStore } from 'redux'

import App from './components/App.js'
import reducers from './reducers'

ReactDOM.render(
  <Provider store={ CreateStore(reducers) } >
    <App />
  </Provider>,
  document.getElementById('root')
)
