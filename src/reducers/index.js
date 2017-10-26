import { combineReducers } from 'redux'
import users from './users'
import groups from './groups'
import visibilityFilter from './visibilityFilter'

const userManagementApp = combineReducers({
  users,
  groups,
  visibilityFilter
})

export default userManagementApp