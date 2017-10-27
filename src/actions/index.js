/* 
    As the Redux official docs state, "actions are payloads of information that send data
    from your application to your store. They are the only source of information for the store.
    You send them to the store using store.dispatch()".

    Below you can find the user action creators and the group action creators, which are functions
    that create actions. This is what will structure the information related to these
    entities throughout the application.
*/

// User actions
let newUserId = 5 //starts with 5 because the mocked users (../mocks/users) are 0 to 4

export const addUser = user => {
    user.id = newUserId++
    return {
        type: 'ADD_USER',
        user
    }
}

export const deleteUser = userId => {
    return {
        type: 'DELETE_USER',
        userId
    }
}

// Group actions
let newGroupId = 3 //starts with 3 because the mocked groups (../mocks/groups) are 0 to 2

export const addGroup = group => {
    group.id = newGroupId++
    return {
        type: 'ADD_GROUP',
        group
    }
}

export const deleteGroup = groupId => {
    return {
        type: 'DELETE_GROUP',
        groupId
    }
}

// Relations actions
export const enterGroup = (userId, groupId) => {
    return {
        type: 'ADD_RELATION',
        userId,
        groupId
    }
}

export const leaveGroup = (userId, groupId) => {
    return {
        type: 'DELETE_RELATION',
        userId,
        groupId
    }
}