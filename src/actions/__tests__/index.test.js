import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../'

jest.mock('../../api')

const mockStore = configureMockStore([thunk])

describe('actions', () => {
  it('should fetch no games', () => {
    const store = mockStore({games: {}})
    return store.dispatch(actions.fetchGames('Zelda'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })

  it('should fetch some games', () => {
    const store = mockStore({games: {}})
    return store.dispatch(actions.fetchGames('Halo'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })
})