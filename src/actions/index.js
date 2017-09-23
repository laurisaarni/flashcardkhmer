import guid from '../lib/guid.js'

//let nextCardId = 0
export const addCard = (front, back) => ({
  type: 'ADD_CARD',
  id: guid(),
  front: front,
  back: back
})

export const addCards = (cards) => ({
  type: 'ADD_CARDS',
  cards
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleCard = (id) => ({
  type: 'TOGGLE_CARD',
  id
})

export const removeCard = (id) => ({
  type: 'REMOVE_CARD',
  id
})
