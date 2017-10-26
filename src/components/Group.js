import React from 'react'
import PropTypes from 'prop-types'
import DeleteGroup from '../containers/DeleteGroup'

const Group = ({ id, name, description }) => (
  <div>
    <p>Id: {id}</p>
    <p>Name: {name}</p>
    <p>Description: {description}</p>
    <DeleteGroup groupId={id}/>
  </div>
)

Group.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Group