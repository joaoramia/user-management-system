/*
    Similar to the UserDetail component, the GroupDetail will show the list of users linked to a
    particular group. It will also give the chance to remove a user from the group
*/

import React from 'react'
import Group from './Group'
import PropTypes from 'prop-types'
import VisibleUserList from '../containers/VisibleUserList'

const GroupDetail = ({ groups, match }) => {
    // find the group with the same id as the route param and return its details
    const group = groups.find(group => group.id === Number(match.params.groupId))

    return (
        <div className="col-md-12">
            <Group {...group} hideDelete={true}/>
            <h3>{group.name}'s members</h3>
            <VisibleUserList groupId={group.id} />
        </div>
    )
}

GroupDetail.propTypes = {
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default GroupDetail