import React, { Component } from 'react';
import './App.css';
import NumberInput from './NumberInput'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberTarget: 50,
      currentGuess: null,
      guesses: []
    }
  }

  handleUserGuess(currentGuess) {
    this.setState({
      currentGuess,
      guesses: [...this.state.guesses, currentGuess],
    })
    console.log(this.state.currentGuess)
  }

  getInputFormOrMessage() {
    if (parseInt(this.state.currentGuess) === this.state.numberTarget) {
      return (<h2>Congrats! You guessed right</h2>)
    } else {
      return <NumberInput label="Your Guess:" handleUserGuess={e => {this.handleUserGuess(e)}}/>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot Or Cold Guessing Game</h1>
        </header>
        {this.getInputFormOrMessage()}
      </div>
    );
  }
}
