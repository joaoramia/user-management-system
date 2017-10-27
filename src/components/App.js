/*
    The App component will contain the structure of the /home page, which is a dashboard
    with an Add and a Delete functionality for both users and groups. It will also list the
    users and groups, providing links to their details pages
*/

import React from 'react'
import AddUser from '../containers/AddUser'
import VisibleUserList from '../containers/VisibleUserList'

import AddGroup from '../containers/AddGroup'
import VisibleGroupList from '../containers/VisibleGroupList'

const App = () => (
    <div className="col-md-12 app-component">
        <h4 className="text-center">A User Management System built with React</h4>
        <div className="row add-cards">
            <div className="col-md-6">
                <AddUser />
                <VisibleUserList />
            </div>
            <div className="col-md-6">
                <AddGroup />
                <VisibleGroupList />
            </div>
        </div>
    </div>
)

export default App