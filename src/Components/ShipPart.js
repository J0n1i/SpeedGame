import react from "react"
import { Button } from "react-bootstrap";
import SpaceshipPartTypes from "./PartTypes";
import { useState } from "react";
import DisplayNumber from "./DisplayNumber";

function ShipPart(props) {
    const [owned, setOwned] = useState(false)
    function Buy() {
        if (owned === false) {
            if (props.money >= props.cost) {
                setOwned(true)
                props.setMoney(money => money - props.cost)
                props.SetBought(props.index)
            }
        }
    }


    

        return (
            <>
                <Button variant="primary" onClick={e => Buy()}>
                    <h2>{props.name}</h2>
                    <h3>${DisplayNumber(props.cost)}</h3>
                    <h3>{SpaceshipPartTypes[props.type]}</h3>
                </Button>
            </>
        );
    }

    export default ShipPart;