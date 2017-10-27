import { connect } from 'react-redux'
import GroupList from '../components/GroupList'

// filterGroupsByUser returns all the groups a user is part of, based on the user's id
const filterGroupsByUser = (relations, groups, userId) => {
    // first we create an array of groupIds that match the user's id in the Relations table:
    let groupIds = []

    relations.forEach(relation => {
        if (relation.userId === userId) {
            groupIds.push(relation.groupId)
        }
    })
    return groups.filter(group => groupIds.indexOf(group.id) > -1)
}

// filterOtherGroupsByUser returns all the groups a user is not yet part of, based on the user's id
const filterOtherGroupsByUser = (relations, groups, userId) => {
    // first we create an array of groupIds that are different than the user's id in the Relations table:
    let groupIds = []

    relations.forEach(relation => {
        if (relation.userId === userId) {
            groupIds.push(relation.groupId)
        }
    })
    return groups.filter(group => groupIds.indexOf(group.id) === -1)
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.userId === undefined) {
        return {
            groups: state.groups
        }
    } else if (!ownProps.otherGroups){
        return {
            groups: filterGroupsByUser(state.relations, state.groups, ownProps.userId)
        }
    } else {
        return {
            groups: filterOtherGroupsByUser(state.relations, state.groups, ownProps.userId)
        }
    }
}

const VisibleGroupList = connect(
    mapStateToProps
)(GroupList)

export default VisibleGroupList