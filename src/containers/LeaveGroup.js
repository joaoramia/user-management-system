import React from 'react'
import { connect } from 'react-redux'
import { leaveGroup } from '../actions'

let LeaveGroup = ({ userId, groupId, dispatch }) => {
    return (
        <div>
            <button className="btn btn-default" onClick={e => {
                e.preventDefault()
                dispatch(leaveGroup(userId, groupId))
            }}>
            Leave Group
            </button>
        </div>
    )
}
LeaveGroup = connect()(LeaveGroup)

export default LeaveGroup