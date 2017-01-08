import api from '../api'

export const REQUEST_GAMES = 'REQUEST_GAMES'
function requestGames(searchTerm) {
  return {
    type: REQUEST_GAMES,
    searchTerm,
    isFetching: true
  }
}

export const RECEIVE_GAMES = 'RECEIVE_GAMES'
function receiveGames(searchTerm, result) {
  return {
    type: RECEIVE_GAMES,
    games: result,
    isFetching: false
  }
}

export function fetchGames(searchTerm) {
  return dispatch => {
    dispatch(requestGames(searchTerm))

    return api.games.get(searchTerm)
      .then(json => {
        dispatch(receiveGames(searchTerm, json));
      })
  }
}

export const REQUEST_GAME = 'REQUEST_GAME'
function requestGame(id) {
  return {
    type: REQUEST_GAME,
    id,
    game: null,
    isFetching: true
  }
}

export const RECEIVE_GAME = 'RECEIVE_GAME'
function receiveGame(id, result) {
  return {
    type: RECEIVE_GAME,
    game: result,
    isFetching: false
  }
}

export function fetchGame(id) {
  return dispatch => {
    dispatch(requestGame(id))

    return api.game.get(id)
      .then(json => {
        dispatch(receiveGame(id, json))
      })
  }
}