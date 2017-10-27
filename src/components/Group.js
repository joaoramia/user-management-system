/*
    The Group component is reused for both the /home page and the group detail page (/group/:groupId).
    It receives props to help with this generalization, making it easy to customize for different
    situations.
    
    In this application, we only want to see the delete button in the home page for instance, so we may
    or may not pass a hideDelete prop to the component
*/

import React from 'react'
import PropTypes from 'prop-types'
import DeleteGroup from '../containers/DeleteGroup'
import EnterGroup from '../containers/EnterGroup'
import LeaveGroup from '../containers/LeaveGroup'
import { NavLink } from 'react-router-dom'

// otherGroups is used for the /user/:userId page, showing the groups the user is not yet a member of
const Group = ({ id, name, description, userId, otherGroups, hideDelete }) => {
    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: <NavLink to={`/group/${id}`}>{name}</NavLink></p>
            <p>Description: {description}</p>
            
            {/*
                if no userId, assume it's in the home route, where you can delete groups
                if hideDelete is true, hide the delete button (Group Detail Page)
            */}
            {
                userId === undefined ? (hideDelete ? '' : <DeleteGroup groupId={id}/>) : ( otherGroups ? <EnterGroup userId={userId} groupId={id}/> : <LeaveGroup userId={userId} groupId={id}/>)
            }
        </div>
    )
}

Group.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Group