import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './CardList.css'

const CardList = ({ cards, onCardClick, onRemoveClick }) => (
  <ul>
    {cards.map(card =>
      <Card
        key={card.id}
        {...card}
        onClick={() => onCardClick(card.id)}
        removeClick={() => onRemoveClick(card.id)}
      />
    )}
  </ul>
)

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
}

export default CardList
