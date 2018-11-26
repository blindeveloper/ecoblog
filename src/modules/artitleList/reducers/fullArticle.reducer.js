const articlesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FULL_ARTICLE':
    return [action.fullArticle]
  case 'CLEAR_FULL_ARTICLE':
    return ''
  default:
    return state
  }
}

export default articlesReducer