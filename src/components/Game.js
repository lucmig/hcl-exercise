import React from 'react';
import data from '../data';
import { MAX_NUMBER,WIN, LOSE, MAX_GUESSES } from './Constants';
import AddGuess from './AddGuess';
import NewGame from './NewGame';
import Result from './Result';
import PastGames from './PastGames';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      secret: null,
      guesses: [],
      result: null,
      pastGames: []
    };
    this.handleAddGuess = this.handleAddGuess.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  async componentDidMount() {
    try {
      await this.loadPastGames();
    }
    catch (err) {
      console.error(err);
    }
  }

  async loadPastGames() {
    try {
      const pastGames = await data.listGames();
      this.setState({
        pastGames: pastGames
      });
    }
    catch (err) {
      console.error(err);
    }
  }

  newGame() {
    this.setState({
      id: null,
      secret: Math.floor(Math.random() * MAX_NUMBER) + 1,
      guesses: [],
      result: null
    })
  }

  handleNewGame() {
    this.newGame();
  }

  async handleAddGuess(guess) {
    try {
      if (this.state.guesses.length >= MAX_GUESSES) {
        console.warn('Already taken all your guesses in this game.')
        return this.state;
      }
      let id = this.state.id;
      let secret = this.state.secret; 
      let result;
      if (!id) {
        id = await data.addGame(secret);
      }
      let guesses = this.state.guesses.slice();
      guesses.push(guess);
      if (guess === secret) {
        result = WIN;
      }
      else if (guesses.length === MAX_GUESSES) {
        result = LOSE;
      }
      await data.updateGame(id, { guesses: guesses, result: result });
      await this.loadPastGames();
      this.setState({
        id,
        guesses,
        result
      });
    }
    catch (err) {
      console.error(err);
    }
    
  }

  render() {
    return(
      <div>
        <AddGuess onAdd={this.handleAddGuess} guesses={this.state.guesses} result={this.state.result} />
        <Result result={this.state.result} guesses={this.state.guesses} />
        <div><NewGame onNewGame={this.handleNewGame} /></div>
        <PastGames games={this.state.pastGames} />
      </div>);
  }
}

export default Game
