import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const VisibleUserList = connect(
    mapStateToProps
)(UserList)

export default VisibleUserList