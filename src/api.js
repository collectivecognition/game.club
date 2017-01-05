import fetch from 'isomorphic-fetch'

export default {
  games: {
    get: searchTerm => {
      return fetch(`https://game-club-api.herokuapp.com/games?q=${searchTerm}`)
        .then(response => response.json());
    }
  }
};