const previousDeck = (state = '', action) => {
  switch (action.type) {
  case 'SET_PREVIOUS':
    return action.deck
  default:
    return state
  }
}

export default previousDeck
