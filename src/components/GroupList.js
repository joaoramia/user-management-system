import React from 'react'
import PropTypes from 'prop-types'
import Group from './Group'

const GroupList = ({ groups }) => (
  <div>
    {groups.map(group => (
      <Group key={group.id} {...group} />
    ))}
  </div>
)

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