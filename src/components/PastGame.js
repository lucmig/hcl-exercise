import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap';
import { WIN } from './Constants';

export default class PastGame extends React.Component {
  render() {
    const game = this.props.game;
    const style = game.result === WIN ? 'success' : 'danger';
    return (
      <ListGroupItem bsStyle={style}>
        {game.id}) secret: {game.secret} guesses: {game.guesses.join(', ')}
      </ListGroupItem>
    );

  }
}

PastGame.propTypes = {
  game: PropTypes.object.isRequired
};
