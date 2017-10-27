/*
    VisibleUserList filters the users by group and organizes them to be shown in the application
*/

import { connect } from 'react-redux'
import UserList from '../components/UserList'

// filterUsersByGroup returns all the users a group contains, based on the group's id
const filterUsersByGroup = (relations, users, groupId) => {
    // first we create an array of groupIds that match the user's id in the Relations table:
    let userIds = []

    relations.forEach(relation => {
        if (relation.groupId === groupId) {
            userIds.push(relation.userId)
        }
    })
    return users.filter(user => userIds.indexOf(user.id) > -1)
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.groupId === undefined) {
        return {
            users: state.users
        }
    } else {
        return {
            users: filterUsersByGroup(state.relations, state.users, ownProps.groupId)
        }
    }
}

const VisibleUserList = connect(
    mapStateToProps
)(UserList)

export default VisibleUserList