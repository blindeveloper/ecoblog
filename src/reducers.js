import { combineReducers } from 'redux'
import articlesListReducer from './modules/artitleList/reducers/articlesList.reducer'
import fullArticleReducer from './modules/artitleList/reducers/fullArticle.reducer'


export default combineReducers({
  articlesListReducer,
  fullArticleReducer
})