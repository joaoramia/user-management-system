/*
    Here we declare the store, which brings the actions and reducers of the application together.
    The store will hold the application's state and facilitate communication to it via methods such as
    dispatch(action), getState() and subscribe(listener).

    React will only need a single html file which contains an element with id 'root', and the whole
    application will run from there
*/

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