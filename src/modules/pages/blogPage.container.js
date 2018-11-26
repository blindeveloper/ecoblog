import { connect } from 'react-redux'
import { addFullArticleAction } from '../artitleList/actions/articlesList.actions'
import blogPage from '../pages/BlogPage.jsx'

const mapDispatchToProps = dispatch => ({
  addFullArticle: article => dispatch(addFullArticleAction(article))
})

const mapStateToProps = state => ({
  fullArticle: state.fullArticleReducer,
  articleList: state.articlesListReducer
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(blogPage)