import './App.css';
import MoneyUpgrade from './Components/MoneyUpgrade';
import ShipPart from './Components/ShipPart';
import { Col, Container, Row, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [money, setMoney] = useState(0)
  const [moneyPerSecond, setMoneyPerSecond] = useState(0);
  const [moneyPerClick, setMoneyPerClick] = useState(1);


  const moneyUpgrades =
    [
      MoneyUpgrade("Upgrade 1", 10, 1)
    ]

  const shipParts = [
    ShipPart("Part 1", 10, 1),
  ]

  function IncreaseMoney() {
    setMoney(money + moneyPerClick);
  }

  return (
    <Container fluid>

      <Row>
        <Col>
          <h1>Money: {money}</h1>
          <h1>Money per second: {moneyPerSecond}</h1>
          <h1>Money per click: {moneyPerClick}</h1>
        </Col>
      </Row>

      <Button onClick={e => IncreaseMoney()}>+</Button>
      <Row>
        <Col>
          <ListGroup>
            {moneyUpgrades.map((item, index) => <ListGroup.Item key={index}>{item}</ListGroup.Item>)}
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            {shipParts.map((item, index) => <ListGroup.Item key={index}>{item}</ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
