import React, { Component, PropTypes } from 'react'

require('pubnub')

require('./Game.styl')

export class Game extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h3>{this.props.params.id}</h3>
      </div>
    )
  }
}

export default Game