/*
    DeleteGroup and DeleteUser will take props from the parent component and dispatch an action
    to a reducer to delete an entity
*/

import { connect } from 'react-redux'
import { deleteGroup } from '../actions'
import DeleteButton from '../components/DeleteButton'

const mapStateToProps = (state, ownProps) => {
    return {
        groupId: ownProps.groupId
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(deleteGroup(ownProps.groupId))
        }
    }
}
  
const DeleteGroup = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)

export default DeleteGroup