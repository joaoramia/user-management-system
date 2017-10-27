/*
    The group and user reducers are very similar, they will organize the state according to actions
    related to these entities
*/

import { Users } from '../mocks/users'

const users = (state = Users, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.user.id,
                    name: action.user.name,
                    age: action.user.age
                }
            ]
        case 'DELETE_USER':
            // the index that will be removed
            let i
            state.forEach((user, index) => {
                if (user.id === action.userId) {
                    i = index
                }
            })
            // remove item in the index i
            state.splice(i, 1);
            return [...state]
        default:
            return state
    }
}

export default users