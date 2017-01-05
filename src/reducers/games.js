import { REQUEST_GAMES, RECEIVE_GAMES } from '../actions'

const games = (state = {
  isFetching: false,
  games: []
}, action) => {
  switch (action.type) {
    case 'REQUEST_GAMES':
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case 'RECEIVE_GAMES':
      return Object.assign({}, state, {
        isFetching: false,
        games: action.games
      })

    default:
      return state
  }
}

export default games