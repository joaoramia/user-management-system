import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users }) => (
  <div>
    {users.map(user => (
      <User key={user.id} {...user} />
    ))}
  </div>
)

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