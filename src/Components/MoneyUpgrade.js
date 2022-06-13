import react from "react"
import { Button } from "react-bootstrap";

function MoneyUpgrade(name, basePrice, boost) {
    let price = basePrice;
    let amount = 0;

    function UpdatePrice() {
        price = basePrice * Math.pow(1.15, amount);
    }

    function Buy() { 
        
    }
    

    return (
        <Button variant="primary" onClick={Buy()}>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>+${boost}/s</p>
        </Button>
    );
}

export default MoneyUpgrade;