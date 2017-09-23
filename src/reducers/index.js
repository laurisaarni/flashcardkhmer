import {combineReducers} from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'


const flashcardskhmerApp = combineReducers({
  cards,
  visibilityFilter
})

export default flashcardskhmerApp
