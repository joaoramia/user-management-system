import { Groups } from '../mocks/groups'

const groups = (state = Groups, action) => {
    switch (action.type) {
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
        let i //this is the index that will be removed

        state.forEach((group, index) => {
          console.log(action);
            if (group.id === action.groupId) {
                i = index
            }
        })
        state.splice(i, 1); // remove item in the index i
        return [...state]

      default:
        return state
    }
  }
  
  export default groups