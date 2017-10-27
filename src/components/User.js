/*
    SIMILAR TO GROUP, the User component is reused for both the /home page and the user detail
    page (/user/:userId).
    
    It receives props to help with this generalization, making it easy to customize for different
    situations.
    
    In this application, we only want to see the delete button in the home page for instance, so we may
    or may not pass a hideDelete prop to the component
*/

import React from 'react'
import PropTypes from 'prop-types'
import DeleteUser from '../containers/DeleteUser'
import LeaveGroup from '../containers/LeaveGroup'
import { NavLink } from 'react-router-dom'

const User = ({ id, name, age, groupId, hideDelete }) => {
    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: <NavLink to={`/user/${id}`}>{name}</NavLink></p>
            <p>Age: {age}</p>

            {/* 
                if no groupId, assume it's in the home route, where you can delete users
                if hideDelete is true, hide the delete button (User Detail Page)
            */}
            {
                groupId === undefined ? (hideDelete ? '' : <DeleteUser userId={id}/>) : <LeaveGroup userId={id} groupId={groupId}/>
            }
        </div>
    )
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default User