import react from "react"
import { Button, Col, Row } from "react-bootstrap";
import DisplayNumber from "./DisplayNumber";
import { useState, useEffect } from "react"
import ProgressBar from "./ProgressBar";


function MoneyUpgrade(props) {
    let money = props.money;
    let name = props.name;
    let time = props.time;
    
    const [progress, setProgress] = useState(0)
    const [amount, setAmount] = useState(0)
    const [cost, setCost] = useState(props.baseCost)
    const [baseCost, setBaseCost] = useState(props.baseCost)
    const [started, setStarted] = useState(false)
    const [timeLeft, setTimeLeft] = useState(props.time)

    function Buy() {
        if (money >= cost) {
            props.setMoney(e => e - cost)
            setAmount(i => i + 1);
            setCost(baseCost * Math.pow(1.15, amount + 1));
            Start()
        }
    }

    function Start() {
        if (!started) {
            setStarted(true)
            setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 0.01)
                setProgress(p => p + 1 / time)
                
            }, 10);
        }
    }

    useEffect(() => {
        if (progress >= 100) {
            setProgress(0)
            props.setMoney(m => m + props.boost);
            setTimeLeft(props.time)
        }
    }, [progress])
    

    return (
        <Row>
            <Col>
                <Button onClick={e => Buy()}>
                    <h2>{name}</h2>
                    <h3>{amount}</h3>
                    <h3>${DisplayNumber(cost)}</h3>
                </Button>
            </Col>
            <Col>
                <ProgressBar progressText={timeLeft} progress={progress} />
            </Col>
        </Row>
    );
}

export default MoneyUpgrade;