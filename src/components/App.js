import React from 'react'
import AddUser from '../containers/AddUser'
import VisibleUserList from '../containers/VisibleUserList'

import AddGroup from '../containers/AddGroup'
import VisibleGroupList from '../containers/VisibleGroupList'

const App = () => (
  <div className="col-md-12">
    <div className="col-md-6">
      <AddUser />
      <VisibleUserList />
    </div>
    <div className="col-md-6">
      <AddGroup />
      <VisibleGroupList />
    </div>
  </div>
)

export default App