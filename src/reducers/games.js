import {
  REQUEST_GAMES, RECEIVE_GAMES,
  REQUEST_GAME, RECEIVE_GAME
} from '../actions'

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

    case REQUEST_GAME:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        game: action.game
      })

    case RECEIVE_GAME:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        game: action.game
      })

    default:
      return state
  }
}

export default games