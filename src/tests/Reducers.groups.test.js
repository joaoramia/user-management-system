import groups from '../reducers/groups'
import { Groups } from '../mocks/groups'

describe('groups reducer', () => {
    it('should return the initial state', () => {
        expect(groups(undefined, {})).toEqual(Groups)
    })

    it('should handle ADD_GROUP', () => {
        expect(
            groups(Groups, {
                type: 'ADD_GROUP',
                group: {
                    id: 10,
                    name: 'test',
                    description: 'testing'
                }
            })
        ).toEqual(Groups.concat([
            {
                id: 10,
                name: 'test',
                description: 'testing'
            }
        ]))

        expect(
            groups(
                [
                    {
                        id: 11,
                        name: 'test2',
                        description: 'testing2'
                    }
                ],
                {
                    type: 'ADD_GROUP',
                    group: {
                        id: 12,
                        name: 'test2',
                        description: 'testing3'
                    }
                }
            )
        ).toEqual([
            {
                id: 11,
                name: 'test2',
                description: 'testing2'
            },
            {
                id: 12,
                name: 'test2',
                description: 'testing3'
            }
        ])
    })

    it('should handle DELETE_GROUP', () => {
        expect(
            groups([
                    {
                        id: 11,
                        name: 'test2',
                        description: 'testing2'
                    },
                    {
                        id: 12,
                        name: 'test3',
                        description: 'testing3'
                    }
                ], {
                type: 'DELETE_GROUP',
                groupId: 11
            })
        ).toEqual([
            {
                id: 12,
                name: 'test3',
                description: 'testing3'
            }
        ])
    })
})