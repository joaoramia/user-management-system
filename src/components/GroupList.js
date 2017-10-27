import React from 'react'
import PropTypes from 'prop-types'
import Group from './Group'

const GroupList = ({ groups, userId, otherGroups }) => {
    return (
        <div>
            {
                groups.map(group => (
                        <Group key={group.id} {...group} userId={userId} otherGroups={otherGroups} />
                    )
                )
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