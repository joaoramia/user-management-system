import React from 'react'
import PropTypes from 'prop-types'
import DeleteUser from '../containers/DeleteUser'

const User = ({ id, name, age }) => (
  <div>
    <p>Id: {id}</p>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <DeleteUser userId={id}/>
  </div>
)

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default User