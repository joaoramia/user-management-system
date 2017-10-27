/*
    DeleteGroup and DeleteUser will take props from the parent component and dispatch an action
    to a reducer to delete an entity
*/

import { connect } from 'react-redux'
import { deleteUser } from '../actions'
import DeleteButton from '../components/DeleteButton'

const mapStateToProps = (state, ownProps) => {
    return {
        userId: ownProps.userId
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(deleteUser(ownProps.userId))
        }
    }
}
  
const DeleteUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)

export default DeleteUser