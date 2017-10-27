import React from 'react'
import { connect } from 'react-redux'
import { enterGroup } from '../actions'

let EnterGroup = ({ userId, groupId, dispatch }) => {
    return (
        <div>
            <button className="btn btn-default" onClick={e => {
                e.preventDefault()
                dispatch(enterGroup(userId, groupId))
            }}>
            Enter Group
            </button>
        </div>
    )
}
EnterGroup = connect()(EnterGroup)

export default EnterGroup