/*
    The group and user reducers are very similar, they will organize the state according to actions
    related to these entities
*/

import { Groups } from '../mocks/groups'

const groups = (state = Groups, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case 'ADD_GROUP':
            return [
                ...state,
                {
                    id: action.group.id,
                    name: action.group.name,
                    description: action.group.description
                }
            ]
        case 'DELETE_GROUP':
            // the index that will be removed
            let i

            state.forEach((group, index) => {
                if (group.id === action.groupId) {
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
  
export default groups