import react from "react"
import { Button } from "react-bootstrap";

function ShipPart(name, price, type) {
    let amount = 0;


    function Buy() { 
        
    }
    

    return (
        <Button variant="primary" onClick={Buy()}>
            <h2>{name}</h2>
            <p>{price}</p>
        </Button>
    );
}

export default ShipPart;