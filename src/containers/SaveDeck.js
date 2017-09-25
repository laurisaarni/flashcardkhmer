import React from 'react'
import { connect } from 'react-redux'
import firebase from '../config/Firebase'

const mapStateToProps = function(state, ownProps) {
  // state is equivalent to store.getState()
  // you then get the slice of data you need from the redux store
  // and pass it as props to your component

  return {
    stateCards: state.cards,
    stateDeck: state.deck
  }
}

let SaveDeck = ({ stateCards, stateDeck }) => {

  const saveToFireBase = () => {

    console.log(stateCards, stateDeck)
    firebase.database().ref('/decks/' + stateDeck).set(stateCards).then(() => {
      console.log('saved')
    })

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
