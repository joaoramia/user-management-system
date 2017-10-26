import { combineReducers } from 'redux'
import users from './users'
import groups from './groups'

const userManagementApp = combineReducers({
    users,
    groups
})

export default userManagementApp