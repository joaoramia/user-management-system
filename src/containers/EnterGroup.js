/*
    EnterGroup facilitates the linking between groups and users, dispatching an action to add a new
    link to the relations model
*/

import React from 'react'
import { connect } from 'react-redux'
import { enterGroup } from '../actions'

let EnterGroup = ({ userId, groupId, dispatch }) => {
    return (
        <div>
            <button className="btn btn-default btn-enter" onClick={e => {
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