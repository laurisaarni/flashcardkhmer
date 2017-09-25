import React from 'react'
import { connect } from 'react-redux'
import { addCard, addCards, setVisibilityFilter } from '../actions'
import firebase from '../config/Firebase'

let AddCard = ({ dispatch }) => {
  let inputFront
  let inputBack

  firebase.database().ref('/decks/DEFAULT_DECK').once('value').then(function(snapshot) {
    let initialDeck = snapshot.val()
    //console.log(initialDeck)
    if(initialDeck && initialDeck.length > 0){
      dispatch(addCards(initialDeck))
    }
    firebase.database().ref('/store/').once('value').then(function(stateSnapshot) {
      let initialState = stateSnapshot.val()
      /*initialState.cards.find((card) => {
        dispatch(addCard(card.front, card.back))
      })*/
      dispatch(setVisibilityFilter(initialState.visibilityFilter))
    })
  })

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputFront.value.trim() || !inputBack.value.trim()) {
          return
        }
        dispatch(addCard(inputFront.value, inputBack.value))
        inputFront.value = ''
        inputBack.value = ''
      }}>
        <div className='formField'>
          <label>Front</label> <input name="front" ref={node => {
            inputFront = node
          }} />
        </div>
        <div className='formField'>
          <label>Back</label> <input name="back" ref={node => {
            inputBack = node
          }} />
        </div>
        <div className='formField'>
          <button type="submit">
            Add Card
          </button>
        </div>
      </form>
    </div>
  )
}
AddCard = connect()(AddCard)

export default AddCard
