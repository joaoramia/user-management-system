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
            let i //this is the index that will be removed

            // find the relation that contains that user and group, and remove that line from the relation table
            state.forEach((relation, index) => {
                console.log(action);
                if (relation.userId === action.userId && relation.groupId === action.groupId) {
                    i = index
                }
            })
            state.splice(i, 1); // remove item in the index i
            return [...state]
        default:
            return state
    }
  }
  
  export default relations