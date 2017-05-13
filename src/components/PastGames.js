import React from 'react'
import PropTypes from 'prop-types'
import PastGame from './PastGame';
import { ListGroup } from 'react-bootstrap';

export default class PastGames extends React.Component {
  render() {
    const gamesList = this.props.games.map(game =>
      <PastGame game={game} />
    );
    return (<ListGroup>{gamesList}</ListGroup>);

  }
}

PastGames.propTypes = {
  games: PropTypes.array.isRequired
};

