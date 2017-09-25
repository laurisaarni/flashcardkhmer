import {combineReducers} from 'redux'
import cards from './cards'
import deck from './deck'
import visibilityFilter from './visibilityFilter'


const flashcardskhmerApp = combineReducers({
  cards,
  visibilityFilter,
  deck
})

export default flashcardskhmerApp
