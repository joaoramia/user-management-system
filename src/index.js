import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import userManagementApp from './reducers'
import App from './components/App'

let store = createStore(userManagementApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)