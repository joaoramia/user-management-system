import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import userManagementApp from './reducers'
import Root from './components/Root'

let store = createStore(userManagementApp)

render(
    <Root store={store} />,
    document.getElementById('root')
)