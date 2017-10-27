/*
    Similar to the GroupDetail component, the UserDetail will show the list of groups linked to a
    particular user. Plus, it will show a list of otherGroups, which are not yet linked to
    that particular user.
    
    Finally, it will also give the chance to have a user leave or enter a group
*/

import React from 'react'
import User from './User'
import PropTypes from 'prop-types'
import VisibleGroupList from '../containers/VisibleGroupList'

const UserDetail = ({ users, match }) => {
    // find the user with the same id as the route param and return its details
    const user = users.find(user => user.id === Number(match.params.userId))
    return (
        <div className="col-md-12 entity-detail">
            <User {...user} hideDelete={true}/>
            <h3 className="text-center">{user.name}'s groups</h3>
            <VisibleGroupList userId={user.id} />
            <h3 className="text-center">Other groups that {user.name} is not yet part of:</h3>
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