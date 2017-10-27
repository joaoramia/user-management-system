/*
    Root will take the store and structure the application, using the react-router-dom to help with
    the routes configuration.
    
    Here I chose to use a /home page, a /user/:userId page and a /group/:groupId page. For each of them,
    you specify what component will be used
*/

import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import Menu from './Menu'
import VisibleUserDetail from '../containers/VisibleUserDetail'
import VisibleGroupDetail from '../containers/VisibleGroupDetail'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Menu />
                <Route path="/user/:userId" component={VisibleUserDetail} />
                <Route path="/group/:groupId" component={VisibleGroupDetail} />
                <Route path="/home" component={App} />
                
                {/* The below route will redirect to /home in case it's the '/' route */}
                <Route render={(match) => { 
                    if (match.location.pathname === '/home') {
                        return ''
                    }
                    if (match.location.pathname === '/') {
                        return <Redirect to="/home"/>
                    }
                    return ''
                    }
                } />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root