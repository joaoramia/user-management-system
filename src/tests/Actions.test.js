import * as actions from '../actions'

describe('actions', () => {
    it('should create an action to add a user', () => {
        const user = {
            name: 'test',
            age: 12
        }
        const expectedAction = {
            type: 'ADD_USER',
            user
        }
        expect(actions.addUser(user)).toEqual(expectedAction)
    })

    it('should create an action to delete a user', () => {
        const userId = 0
        const expectedAction = {
            type: 'DELETE_USER',
            userId
        }
        expect(actions.deleteUser(userId)).toEqual(expectedAction)
    })

    it('should create an action to add a group', () => {
        const group = {
            name: 'test',
            description: 'test description'
        }
        const expectedAction = {
            type: 'ADD_GROUP',
            group
        }
        expect(actions.addGroup(group)).toEqual(expectedAction)
    })

    it('should create an action to delete a group', () => {
        const groupId = 0
        const expectedAction = {
            type: 'DELETE_GROUP',
            groupId
        }
        expect(actions.deleteGroup(groupId)).toEqual(expectedAction)
    })

    it('should create an action to enter a user in a group', () => {
        const userId = 0
        const groupId = 0
        const expectedAction = {
            type: 'ADD_RELATION',
            userId,
            groupId
        }
        expect(actions.enterGroup(userId, groupId)).toEqual(expectedAction)
    })

    it('should create an action to enter a user in a group', () => {
        const userId = 0
        const groupId = 0
        const expectedAction = {
            type: 'DELETE_RELATION',
            userId,
            groupId
        }
        expect(actions.leaveGroup(userId, groupId)).toEqual(expectedAction)
    })
})