import { connect } from 'react-redux'
import GroupList from '../components/GroupList'

const mapStateToProps = state => {
  return {
    groups: state.groups
  }
}

const VisibleGroupList = connect(
  mapStateToProps
)(GroupList)

export default VisibleGroupList