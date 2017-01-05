import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'babel-polyfill'
import rootReducers from './reducers'
import App from './components/App'

let store = createStore(rootReducers, applyMiddleware(
  thunkMiddleware
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)