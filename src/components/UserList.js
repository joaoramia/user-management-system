import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users, groupId }) => {
    return (
        <div>
            {
                users.length ? <h5 className="list-title">User list</h5> : ''
            }
            {
                users.length ? users.map(user => (<User key={user.id} {...user} groupId={groupId} />)) : <p className="text-center">No users found</p>
            }
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default UserList