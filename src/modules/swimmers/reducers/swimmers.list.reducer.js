const swimmersReducer = (state = [], action) => {
  console.log('action: ', action);
  switch (action.type) {
    case 'ADD_NEW_SWIMMER':
      return [
        ...state,
        {
          name: action.name,
          id: action.id
        }
      ]
    case 'REMOVE_SWIMMER':
      return state.filter(el => el.id !== action.id)
    default:
      return state
  }
}

export default swimmersReducer