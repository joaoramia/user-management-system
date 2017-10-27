import relations from '../reducers/relations'
import { Relations } from '../mocks/relations'

describe('relations reducer', () => {
    it('should return the initial state', () => {
        expect(relations(undefined, {})).toEqual(Relations)
    })

    it('should handle ADD_RELATION', () => {
        expect(
            relations(Relations, {
                type: 'ADD_RELATION',
                userId: 0,
                groupId: 0
            })
        ).toEqual(Relations.concat([
            {
                userId: 0,
                groupId: 0
            }
        ]))

        expect(
            relations(
                [
                    {
                        userId: 0,
                        groupId: 0
                    }
                ],
                {
                    type: 'ADD_RELATION',
                    userId: 1,
                    groupId: 1
                }
            )
        ).toEqual([
            {
                userId: 0,
                groupId: 0
            },
            {
                userId: 1,
                groupId: 1
            }
        ])
    })

    it('should handle DELETE_RELATION', () => {
        expect(
            relations([
                    {
                        userId: 0,
                        groupId: 0
                    },
                    {
                        userId: 1,
                        groupId: 1
                    }
                ], {
                type: 'DELETE_RELATION',
                groupId: 0,
                userId: 0
            })
        ).toEqual([
            {
                userId: 1,
                groupId: 1
            }
        ])
    })
})