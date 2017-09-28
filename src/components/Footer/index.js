import React from 'react'
import FilterLink from '../../containers/FilterLink'
import DeckSelect from '../../containers/DeckSelect'
import SaveDeck from '../../containers/SaveDeck'
import FontAwesome from 'react-fontawesome'
import './Footer.css'

const Footer = () => (
  <nav>
    <p>
      Filter <FontAwesome name='filter' />
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        Still learning
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        Already learned
      </FilterLink>
    </p>
    <DeckSelect selectedDeck="DEFAULT_DECK"
      decks={[
        {
          value: 'DEFAULT_DECK',
          label: 'Default',
          id: 1
        },
        {
          value: 'LAURI_DECK',
          label: 'Lauri',
          id: 2
        },
        {
          value: 'LEENA_DECK',
          label: 'Leena',
          id: 3
        },
        {
          value: 'VILMA_DECK',
          label: 'Vilma',
          id: 4
        }
      ]}
    />
    <SaveDeck/>
  </nav>
)

export default Footer
