import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Menu from './Menu'
import VisibleUserDetail from '../containers/VisibleUserDetail'
import VisibleGroupDetail from '../containers/VisibleGroupDetail'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Menu />
                <Route path="/user/:userId" component={VisibleUserDetail} />
                <Route path="/group/:groupId" component={VisibleGroupDetail} />
                <Route path="/home" component={App} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root