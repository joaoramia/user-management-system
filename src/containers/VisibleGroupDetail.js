/*
    VisibleGroupDetail takes the groups from the state and uses them for the /group/:groupId page
*/

import { connect } from 'react-redux'
import GroupDetail from '../components/GroupDetail'

const mapStateToProps = (state, ownProps) => {
    return {
        groups: state.groups
    }
}

const VisibleGroupDetail = connect(
    mapStateToProps
)(GroupDetail)

export default VisibleGroupDetail