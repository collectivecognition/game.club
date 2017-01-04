import React, {Component} from 'react';
import {List} from 'immutable';

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: List()
    };
    this.addItem = this.addItem.bind(this);
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem}/>
        <BeerList items={this.state.beers}/>
      </div>
    )
  }

  addItem(name) {
    this.setState({
      beers: this.state.beers.push(name)
    });
  }
}

export class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.setText = this.setText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.setText}/>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }

  setText(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ''
    });

    event.preventDefault();
  }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export class BeerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.items) return null;

    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}

BeerList.PropTypes = {
  items: React.PropTypes.array.isRequired
};