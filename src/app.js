import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import 'babel-polyfill'
import rootReducers from './reducers'

import 'bootstrap/dist/css/bootstrap.css'

import Game from './components/Game'
import Home from './components/Home'

let store = createStore(rootReducers, applyMiddleware(
  thunkMiddleware
));

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/game/:id" component={Game}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)