import { REQUEST_GAMES, RECEIVE_GAMES } from '../actions'

const games = (state = {
  isFetching: false,
  games: []
}, action) => {
  switch (action.type) {
    case REQUEST_GAMES:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm,
        isFetching: action.isFetching
      })
      
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        games: action.games
      })

    default:
      return state
  }
}

export default games