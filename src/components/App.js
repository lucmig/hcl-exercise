import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Game from './Game'

const App = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={8} xsOffset={2}>
        <Header />
        <Game />
      </Col>
    </Row>
  </Grid>
)

export default App
