import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import userManagementApp from '../reducers'
import { createStore } from 'redux'

let store = createStore(userManagementApp)

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root store={store} />, div);
});
