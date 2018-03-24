import React, {Component} from 'react';

export default class NumberInput extends Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.handleUserGuess(this.userGuess.value);
  }

  render() {
    const helpText = `Guess a number between ${this.props.min} and ${this.props.max}!`
    return (
        <div className="form-group">
          <p className="App-intro">{helpText}</p>
          <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input 
              type="number"
              ref={input => this.userGuess = input}
              min={this.props.min}
              max={this.props.max}
            />
            <button type="submit">Submit Guess</button>  
          </form>
        </div>
    );
  }
}

NumberInput.defaultProps = {
  min: 0,
  max: 100,
}

// ref={input => this.userGuess = input}
