import { Users } from '../mocks/users'

const users = (state = Users, action) => {
    switch (action.type) {
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
        let i //this is the index that will be removed

        state.forEach((user, index) => {
          console.log(action);
            if (user.id === action.userId) {
                i = index
            }
        })
        state.splice(i, 1); // remove item in the index i
        return [...state]

      default:
        return state
    }
  }
  
  export default users