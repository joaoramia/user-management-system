/*
    Reducers will specify how the application's state will change in response to an action.
    Since the state is stored in a single object, it was important to create a relations table
    to facilitate the linking between the users and groups, without nesting them together and
    making it more complex to update whenever some relationship changed.
    
    The relations are simple objects with the id of a group and the id of a user,
    which connects them together, very easy to maintain!
*/

import users from './users'
import groups from './groups'
import relations from './relations'
import { combineReducers } from 'redux'

const userManagementApp = combineReducers({
    users,
    groups,
    relations
})

export default userManagementApp