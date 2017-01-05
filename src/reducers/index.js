import { combineReducers } from 'redux'
import games from './games'

const todoApp = combineReducers({
  games
})

export default todoApp