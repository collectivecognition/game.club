import api from '../api'

export const REQUEST_GAMES = 'REQUEST_GAMES'
function requestGames(searchTerm) {
  return {
    type: REQUEST_GAMES,
    searchTerm
  }
}

export const RECEIVE_GAMES = 'RECEIVE_GAMES'
function receiveGames(searchTerm, result) {
  return {
    type: RECEIVE_GAMES,
    games: result
  }
}

export function fetchGames(searchTerm) {
  return (dispatch) => {
    dispatch(requestGames(searchTerm))

    api.games.get(searchTerm)
      .then(json => {
        dispatch(receiveGames(searchTerm, json));
      })
  }
}