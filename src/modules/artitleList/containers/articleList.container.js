import { connect } from 'react-redux'
import { addListOfArticlesAction } from '../actions/articlesList.actions'
import articleList from '../components/articleList.component.jsx'

const mapStateToProps = state => ({
  listOfArticles: state.articlesListReducer
})

const mapDispatchToProps = (dispatch) => ({
  addListOfArticles: (list) => dispatch(addListOfArticlesAction(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(articleList)
