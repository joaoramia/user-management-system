/*
    GroupList will simply return a loop of Group components related to whatever
    group list we may want to show
*/

import React from 'react'
import PropTypes from 'prop-types'
import Group from './Group'

// we may pass userId to the Group to facilitate potential changes in the connections between a user
// and a group (for the case of the /user/:userId page for instance)
const GroupList = ({ groups, userId, otherGroups }) => {
    return (
        <div>
            {
                groups.length ? <h5 className="list-title">Group list</h5> : ''
            }
            {
                groups.length ? groups.map(group => (<Group key={group.id} {...group} userId={userId} otherGroups={otherGroups} />)) : <p className="text-center">No groups found</p>
            }
        </div>
    )
}

GroupList.propTypes = {
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default GroupList