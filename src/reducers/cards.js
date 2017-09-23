const cards = (state = [], action) => {
  switch (action.type) {
  case 'ADD_CARD':
    return [
      ...state,
      {
        id: action.id,
        front: action.front,
        back: action.back,
        completed: false,
        memorized: false
      }
    ]
  case 'ADD_CARDS':
    return action.cards
  case 'TOGGLE_CARD':
    return state.map(card =>
      (card.id === action.id)
        ? {...card, completed: !card.completed}
        : card
    )
  case 'REMOVE_CARD':
    return state.reduce((cards, card) => {
      if (card.id !== action.id){
        cards.push(card)
      }
      return cards
    }, [])
  default:
    return state
  }
}

export default cards
