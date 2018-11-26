import { connect } from 'react-redux'
import { clearFullArticleAction } from '../actions/articlesList.actions'
import fullArticle from '../components/fullArticle.component.jsx'

const mapStateToProps = state => ({
  fullArticle: state.fullArticleReducer[0]
})

const mapDispatchToProps = dispatch => ({
  clearFullArticle: () => dispatch(clearFullArticleAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fullArticle)
