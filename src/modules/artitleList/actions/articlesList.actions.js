export const addListOfArticlesAction = list => ({
  type: 'ADD_LIST_OF_ARTICLES',
  list: list
})

export const addFullArticleAction = fullArticle => ({
  type: 'ADD_FULL_ARTICLE',
  fullArticle: fullArticle
})

export const clearFullArticleAction = () => ({
  type: 'CLEAR_FULL_ARTICLE'
})