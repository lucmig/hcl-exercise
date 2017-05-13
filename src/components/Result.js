import React from 'react'
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap';
import { WIN } from './Constants';

export default class Result extends React.Component {
  render() {
    if (!this.props.result) {
      return (<span/>);
    }
    let style = this.props.result === WIN ? 'success' : 'danger';
    return (         
      <Panel header={this.props.result} bsStyle={style}>
        Number was: {this.props.secret}. Your guesses {this.props.guesses.join(", ")}.
      </Panel>
    );

  }
}

Result.propTypes = {
  result: PropTypes.string,
  guesses: PropTypes.array.isRequired,
  secret: PropTypes.number
};
