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