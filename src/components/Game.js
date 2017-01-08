import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

import { fetchGame } from '../actions'

require('./Game.styl')

export class Game extends Component {
  componentWillMount() {
    this.props.dispatch(fetchGame(this.props.params.id))
  }

  render() {
    return (
      <div>
        {this.props.isFetching && 'Loading...'}
        {this.props.game &&
          <h1>{this.props.game.name}</h1>
        }
      </div>
    )
  }
}

Game.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return state.games;
}

export default connect(mapStateToProps)(Game);