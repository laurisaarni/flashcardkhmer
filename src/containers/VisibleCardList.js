import { connect } from 'react-redux'
import { toggleCard, removeCard } from '../actions'
import CardList from '../components/CardList'

const getVisibleCards = (cards, filter) => {
  switch (filter) {
    
  case 'SHOW_ALL':
    return cards
  case 'SHOW_COMPLETED':
    return cards.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return cards.filter(t => !t.completed)
  default:
    throw new Error('Unknown filter: ' + filter)

  }
}

const mapStateToProps = (state) => ({
  cards: getVisibleCards(state.cards, state.visibilityFilter)
})

const mapDispatchToProps = {
  onCardClick: toggleCard,
  onRemoveClick: removeCard
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCardList
