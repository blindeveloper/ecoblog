let swimmersCounter = 0

export const addNewSwimmerAction = swimmerName => ({
  type: 'ADD_NEW_SWIMMER',
  name: swimmerName,
  id: swimmersCounter++
})

export const removeSwimmerAction = swimmerId => ({
  type: 'REMOVE_SWIMMER',
  id: swimmerId
})