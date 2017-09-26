import React from 'react'
import { connect } from 'react-redux'
import firebase from '../config/Firebase'

const mapStateToProps = function(state, ownProps) {

  return {
    stateCards: state.cards,
    stateDeck: state.deck
  }
}

let SaveDeck = ({ stateCards, stateDeck }) => {

  const saveToFireBase = () => {

    firebase.database().ref('/decks/' + stateDeck).set(stateCards).then(() => {})

  }

  return (

    <form onSubmit={e => {
      e.preventDefault()
    }}>
      <div className='formField'>
        <button onClick={saveToFireBase}>Save deck</button>
      </div>
    </form>

  )
}

SaveDeck = connect(mapStateToProps)(SaveDeck)

export default SaveDeck
