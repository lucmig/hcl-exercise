import React from 'react';
import PropTypes from 'prop-types';
import { MAX_NUMBER, MAX_GUESSES } from './Constants';
import { Jumbotron, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class AddGuess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      guessValidationState: undefined
    };
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  onValueChanged(event) {
    const guess = event.target.value;
    if (this.validate(this.props.result, guess)) {
      this.setState({
        guess: parseInt(guess, 10)
      });
    }
  }

  validate(result, guess) {
    if (result || guess < 1 || guess > MAX_NUMBER ) {
      this.setState({
        guessValidationState: 'error'
      })
      return false
    } 
    if (this.state.guessValidationState) {
      this.setState({
        guessValidationState: undefined
      })
    }
    return true;
  }

  attemptsLeft() {
    return MAX_GUESSES - this.props.guesses.length;
  }

  render() {
    return (
      <FormGroup 
        validationState={this.state.guessValidationState} 
        disabled={typeof(this.props.result) !== 'undefined'}>
        <Jumbotron>
          <p>Guess a number between 1 and {MAX_NUMBER}</p>
          <p>You have {this.attemptsLeft()} attempts left</p>
        </Jumbotron>
        <InputGroup>
          <InputGroup.Addon>Guess</InputGroup.Addon>
          <FormControl 
            type="number" 
            className="form-control" 
            placeholder="Your guess."
            value={this.state.guess} 
            onChange={this.onValueChanged} />
          <InputGroup.Button>         
            <Button onClick={() => this.props.onAdd(this.state.guess)}>
              Guess
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );

  }
}

AddGuess.propTypes = {
  guesses: PropTypes.array.isRequired,
  result: PropTypes.string,
  onAdd: PropTypes.func.isRequired
};


