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