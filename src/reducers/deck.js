const deck = (state = 'DEFAULT_DECK', action) => {
  switch (action.type) {
  case 'SELECT_DECK':
    return action.deck
  default:
    return state
  }
}

export default deck
