import { combineReducers } from 'redux'
import users from './users'
import groups from './groups'
import relations from './relations'

const userManagementApp = combineReducers({
    users,
    groups,
    relations
})

export default userManagementApp