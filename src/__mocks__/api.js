const games = [
  { name: 'Halo' },
  { name: 'Halo 2' },
  { name: 'Grand Theft Auto' }
]

export default {
  games: {
    get: searchTerm => {
      return new Promise((resolve, reject) => {
        resolve(games.filter(game => game.name.indexOf(searchTerm) > -1)); // Basic case sensitive search
      })
    }
  }
}