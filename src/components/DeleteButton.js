/*
    Since we provide a userId || groupId, this component can be used for both entities,
    and will fire the action according to their props
*/
import React from 'react'
import PropTypes from 'prop-types'

const DeleteButton = ({ userId, groupId, onClick }) => {
    return (
        <button
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
            className="btn btn-default btn-delete"
        >
        Delete
        </button>
    )
}

DeleteButton.propTypes = {
    userId: PropTypes.number, // not required since this component works for both entities - users and groups
    groupId: PropTypes.number, // not required since this component works for both entities - users and groups
    onClick: PropTypes.func.isRequired
}

export default DeleteButton