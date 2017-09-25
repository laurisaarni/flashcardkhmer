import React from 'react'
import { connect } from 'react-redux'
import { selectDeck, addCards } from '../actions'
import firebase from '../config/Firebase'
import guid from '../lib/guid'

let DeckSelect = ({ dispatch, decks, selectedDeck }) => {
  let input

  const submitForm = () => {
    if (!input.value.trim()) {
      return
    }

    firebase.database().ref('/store/').once('value').then(function(snapshot) {
      let currentState = snapshot.val()
      //console.log(currentState.cards, currentState.deck, input.value)
      firebase.database().ref('/decks/' + currentState.deck).set(currentState.cards).then(() => {
        firebase.database().ref('/decks/' + input.value).once('value').then((selectedDeckSnapshot) => {
          let selectedDeck = selectedDeckSnapshot.val()
          if(selectedDeck === null){
            selectedDeck = [
              {
                id: guid(),
                front: 'Example card',
                back: 'Back side of example card'
              }
            ]
          }
          // console.log(selectedDeck)
          dispatch(addCards(selectedDeck))
          dispatch(selectDeck(input.value))
        })
      })
    })
  }

  return (

    <form onSubmit={e => {
      e.preventDefault()
    }}>
      <div className='formField'>
        <label>Select card deck</label><br/>
        <select onChange={submitForm} ref={node => { input = node }}>
          {decks.map(optionItem => (
            <option key={optionItem.id} value={optionItem.value}>
              {optionItem.label}
            </option>
          ))}
        </select>
      </div>
    </form>

  )
}

DeckSelect = connect()(DeckSelect)

export default DeckSelect
