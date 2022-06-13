import './App.css';
import { Col, Container, Row, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import DisplayNumber from './Components/DisplayNumber';
import MoneyUpgrade from './Components/MoneyUpgrade';
import ShipPart from './Components/ShipPart';

function App() {
  const [money, setMoney] = useState(0)
  const [moneyPerClick, setMoneyPerClick] = useState(1);
  const [fuel, setFuel] = useState(0)



  function IncreaseMoney() {
    setMoney(money + moneyPerClick);
  }


  const moneyUpgradeList = [
    { name: "Upgrade 1", baseCost: 1, boost: 0.1, time: 1 },
    { name: "Upgrade 2", baseCost: 10, boost: 1, time: 2 },
    { name: "Upgrade 3", baseCost: 100, boost: 10, time: 4 },
    { name: "Upgrade 4", baseCost: 1000, boost: 100, time: 8 },
    { name: "Upgrade 5", baseCost: 10000, boost: 1000, time: 16 },
    { name: "Upgrade 6", baseCost: 100000, boost: 10000, time: 32 },
    { name: "Upgrade 7", baseCost: 1000000, boost: 100000, time: 64 },
    { name: "Upgrade 8", baseCost: 10000000, boost: 1000000, time: 128 },
  ]


  const partList = [
    { name: 'Cockpit-mk1', cost: 200, type: 0},
    { name: 'Engine-mk1', cost: 10, type: 2},
  ]

  const [partsForSell, setPartsForSell] = useState([...partList])
  const [boughtParts, setBoughtParts] = useState([])

  function SetBought(index) { 
    let part = partsForSell[index];
    setPartsForSell(arr => arr.splice(arr.indexOf(part), 1));
    setBoughtParts(arr => arr.concat(part))
  }


  return (
    <Container fluid>


      <Row>
        <Col>
          <h1>Money: ${DisplayNumber(money)}</h1>
          <h1>Fuel: {DisplayNumber(fuel)}</h1>
        </Col>
      </Row>

      <Button onClick={e => IncreaseMoney()}>+</Button>
      <Row>
        <Col>
          <h1>Buy Money Upgrades</h1>
          <ListGroup>
            {moneyUpgradeList.map((item, index) => 
              <ListGroup.Item key={index}><MoneyUpgrade time={item.time} setMoney={setMoney} money={money} name={item.name} baseCost={item.baseCost} boost={item.boost} /></ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col>
          <h1>Buy Spaceship parts</h1>
          <ListGroup>
            {partsForSell.map((item, index) =>
              <ListGroup.Item key={index}><ShipPart index={index} SetBought={SetBought} setMoney={setMoney} name={item.name} cost={item.cost} type={item.type} money={money}/></ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col>
          <h1>Owned spaceship parts</h1>
          <ListGroup>
            {boughtParts.map((item, index) =>
              <ListGroup.Item key={index}><ShipPart index={index} SetBought={SetBought} setMoney={setMoney} name={item.name} cost={item.cost} type={item.type} money={money}/></ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
