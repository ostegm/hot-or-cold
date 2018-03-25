import React, { Component } from 'react';
import './App.css';
import NumberInput from './NumberInput'
import MessageSection from './MessageSection'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberTarget: Math.floor(Math.random() * 100),
      currentGuess: null,
      guesses: [],
      message: "Enter a guess to find out if you're hot or cold."
    }
  }

  handleUserGuess(currentGuess) {
    currentGuess = parseInt(currentGuess)
    this.setState({
      currentGuess,
      guesses: [...this.state.guesses, currentGuess],
    })
    this.setState({message: this.getMessage(currentGuess)})
  }

  getMessage(currentGuess) {
    const diff = Math.abs(this.state.numberTarget - currentGuess);
    console.log(diff);
    if(currentGuess === this.state.numberTarget) {
      return "Congrats, you got it!"
    } else if (diff > 50) {
      return "You're very cold."
    } else if (diff > 25) {
      return "You're cold."
    } else if (diff > 10) {
      return "You're warm."
    } else {
      return "You're hot!"
    }
  }

  getInputForm() {
    if (this.state.currentGuess === this.state.numberTarget) {
      return 
    } else {
      return <NumberInput 
                label="Your Guess:" 
                handleUserGuess={e => {this.handleUserGuess(e)}}
              />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot Or Cold Guessing Game</h1>
        </header>
        {this.getInputForm()}
        <MessageSection text={this.state.message} guesses={this.state.guesses} />
        <a href="">Try again?</a>
      </div>
    );
  }
}
