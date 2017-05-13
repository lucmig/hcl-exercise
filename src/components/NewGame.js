import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default class NewGame extends React.Component {
  render() {
    return (         
      <Button onClick={this.props.onNewGame}>
        New Game
      </Button>
    );

  }
}

NewGame.propTypes = {
  onNewGame: PropTypes.func.isRequired
};


