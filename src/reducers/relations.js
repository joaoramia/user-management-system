/*
    The relation reducers are important for any kind of change in links between groups and users.
    
    Since the only functionalities in this application related to links between these entities are
    'add' and 'delete' links, these reducers can be used for both user actions and group actions
*/

import { Relations } from '../mocks/relations'

const relations = (state = Relations, action) => {
    switch (action.type) {
        case 'ADD_RELATION':
            return [
                ...state,
                {
                    userId: action.userId,
                    groupId: action.groupId
                }
            ]
        case 'DELETE_RELATION':
            // the index that will be removed
            let i

            // find the relation that contains that user and group, and remove that line from the relation table
            state.forEach((relation, index) => {
                if (relation.userId === action.userId && relation.groupId === action.groupId) {
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
  
export default relations