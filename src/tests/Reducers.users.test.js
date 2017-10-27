import users from '../reducers/users'
import { Users } from '../mocks/users'

describe('users reducer', () => {
    it('should return the initial state', () => {
        expect(users(undefined, {})).toEqual(Users)
    })

    it('should handle ADD_USER', () => {
        expect(
            users(Users, {
                type: 'ADD_USER',
                user: {
                    id: 10,
                    name: 'test',
                    age: 10
                }
            })
        ).toEqual(Users.concat([
            {
                id: 10,
                name: 'test',
                age: 10
            }
        ]))

        expect(
            users(
                [
                    {
                        id: 11,
                        name: 'test2',
                        age: 11
                    }
                ],
                {
                    type: 'ADD_USER',
                    user: {
                        id: 12,
                        name: 'test2',
                        age: 12
                    }
                }
            )
        ).toEqual([
            {
                id: 11,
                name: 'test2',
                age: 11
            },
            {
                id: 12,
                name: 'test2',
                age: 12
            }
        ])
    })

    it('should handle DELETE_USER', () => {
        expect(
            users([
                    {
                        id: 11,
                        name: 'test2',
                        age: 11
                    },
                    {
                        id: 12,
                        name: 'test3',
                        age: 12
                    }
                ], {
                type: 'DELETE_USER',
                userId: 11
            })
        ).toEqual([
            {
                id: 12,
                name: 'test3',
                age: 12
            }
        ])
    })
})