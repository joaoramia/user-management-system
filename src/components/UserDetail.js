import React from 'react'
import User from './User'
import PropTypes from 'prop-types'
import VisibleGroupList from '../containers/VisibleGroupList'

const UserDetail = ({ users, match }) => {
    // find the user with the same id as the route param and return its details
    const user = users.find(user => user.id === Number(match.params.userId))
    return (
        <div className="col-md-12">
            <User {...user} hideDelete={true}/>
            <h3>{user.name}'s groups</h3>
            <VisibleGroupList userId={user.id} />
            <h3>Other groups that {user.name} is not yet part of:</h3>
            <VisibleGroupList userId={user.id} otherGroups={true} />
        </div>
    )
}

UserDetail.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default UserDetail