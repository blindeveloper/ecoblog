import { connect } from 'react-redux'
import { addListOfArticlesAction, addFullArticleAction } from '../actions/articlesList.actions'
import articleList from '../components/articleList.component.jsx'

const mapStateToProps = state => ({
  listOfArticles: state.articlesListReducer
})

const mapDispatchToProps = (dispatch) => ({
  addListOfArticles: list => dispatch(addListOfArticlesAction(list)),
  addFullArticle: article => dispatch(addFullArticleAction(article))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(articleList)
