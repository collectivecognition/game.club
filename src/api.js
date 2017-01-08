import fetch from 'isomorphic-fetch'

const prefix = 'https://game-club-api.herokuapp.com';

export default {
  games: {
    get: searchTerm => {
      return fetch(`${prefix}/games?q=${searchTerm}`)
        .then(response => response.json());
    }
  },
  game: {
    get: id => {
      return fetch(`${prefix}/games/${id}`)
        .then(response => response.json())
    }
  }
};