import { connect } from 'react-redux'
import { removeSwimmerAction } from '../actions/swimmers.actions'
import swimmersList from '../components/swimmersList.jsx'

const mapStateToProps = (state, ownProps) => ({
  swimmersListContainer: state.swimmersListReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeSwimmer: id => dispatch(removeSwimmerAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(swimmersList)