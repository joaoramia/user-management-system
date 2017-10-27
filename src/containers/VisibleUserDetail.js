/*
    VisibleUserDetail takes the users from the state and uses them for the /user/:userId page
*/

import { connect } from 'react-redux'
import UserDetail from '../components/UserDetail'

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

const VisibleUserDetail = connect(
    mapStateToProps
)(UserDetail)

export default VisibleUserDetail