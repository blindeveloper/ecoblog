import { connect } from 'react-redux'
import { addNewSwimmerAction } from '../actions/swimmers.actions'
import addNewSwimmer from '../components/addNewSwimmer.jsx'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewSwimmerAct: name => dispatch(addNewSwimmerAction(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addNewSwimmer)
