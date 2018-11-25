const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST_OF_ARTICLES':
      return action.list
    default:
      return state
  }
}

export default articlesReducer