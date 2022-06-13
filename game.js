const moneyElement = document.getElementById('money');
const moneyPerSecondElement = document.getElementById('moneyPerSecond');
const addMoneyButton = document.getElementById('addMoneyButton');
const moneyUpgradesListElement = document.getElementById('moneyUpgradesList');
const shipPartsListElement = document.getElementById('shipPartsList');
const ownedPartsListElement = document.getElementById('ownedPartsList');



const ownedCategoryButtons = [
    document.getElementById('ownedCategoryButton0'),
    document.getElementById('ownedCategoryButton1'),
    document.getElementById('ownedCategoryButton2'),
    document.getElementById('ownedCategoryButton3'),
    document.getElementById('ownedCategoryButton4'),
    document.getElementById('ownedCategoryButton5'),
]

ownedCategoryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        FilterOwnedParts(index);
    })
})


function FilterOwnedParts(index) {
    ownedPartsListElement.innerHTML = "";

    let result = null;
    if (index == 0) {
        result = ownedParts;
    } else {
        result = ownedParts.filter(item => item.type == index - 1);
    }


    result.forEach(item => {
        console.log(item)
        ownedPartsListElement.appendChild(item.listElement[0]);
    })
}



const speedOfLight = 299792458;

class Game {
    speed = 0;
    money = 0;
    moneyPerSec = 0;
    acceleration = 0;
    mass = 1;
    energy = 1;
    cSpeed = 0;

    EarnMoney(amount) {
        this.money += amount;
        console.log("Added $" + amount.toLocaleString());
    }
}

game = new Game();


const NumberAbbreviation = ["", "K", "M", "B", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T",
    "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U",
    "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N",
    "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp",
    "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt",
    "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T",
    "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U",
    "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N",
    "Dc", "U", "D", "T", "Q", "Qt", "Sx", "Sp", "O", "N", "Dc"]


let DisplayNumber = (number) => {
    if (number < 1000) {
        return number.toFixed(2)
    } else {
        let a = number;
        a = a.toFixed(2);
        a = a.toLocaleString("fullwide", { useGrouping: false });
        let b = a.length;
        c = ((b - 1) / 3)
        c = Math.floor(c) - 1;

        let d = a.substring(0, (b - 4) % 3 + 1);

        let e = a.substring(d.length, d.length + 2);

        return d + "." + e + NumberAbbreviation[c]
    }
}



class ShipPart {
    name;
    type;
    cost;
    boosts = [];
    info;
    installed = false;
    owned = false;
    installTime = 0;
    CreateElements() {
        for (let i = 1; i < this.listElement.length; i++) {
            this.listElement[0].appendChild(this.listElement[i]);
        }
    }

    SetOwned() {
        this.owned = true;
        this.listElement[0].removeChild(this.listElement[2]);
    }

    constructor(name, type, cost, boosts, installTime, info) {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.boosts = boosts
        this.info = info;
        this.installTime = installTime;

        this.listElement = [5]

        this.listElement[0] = document.createElement('button');
        this.listElement[1] = document.createElement('h2');
        this.listElement[2] = document.createElement('p');

        this.listElement[0].classList.add("list-group-item");

        this.listElement[1].innerHTML = this.name;
        this.listElement[2].innerHTML = "$" + DisplayNumber(this.cost);

    }
}





class MoneyUpgrade {
    amount = 0;
    name;
    baseCost;
    cost;
    moneyPerSec;
    info;
    listElement;
    updateCost() {
        this.cost = this.baseCost * Math.pow(1.15, this.amount);
    }
    UpdateElements() {
        this.listElement[2].innerHTML = this.amount;
        this.listElement[3].innerHTML = "$" + DisplayNumber(this.cost);
    }
    CreateElements() {
        for (let i = 1; i < this.listElement.length; i++) {
            this.listElement[0].appendChild(this.listElement[i]);
        }
    }

    constructor(name, baseCost, moneyPerSec, info) {
        this.name = name;
        this.baseCost = baseCost;
        this.moneyPerSec = moneyPerSec;
        this.info = info;
        this.cost = this.baseCost;

        this.listElement = [6];

        this.listElement[0] = document.createElement('button');
        this.listElement[1] = document.createElement('h2');
        this.listElement[2] = document.createElement('h3');
        this.listElement[3] = document.createElement('p');
        this.listElement[4] = document.createElement('p');

        this.listElement[0].classList.add("list-group-item");
        this.listElement[0].classList.add("btn");

        this.listElement[1].innerHTML = this.name;
        this.listElement[2].innerHTML = this.amount;
        this.listElement[3].innerHTML = "$" + DisplayNumber(this.cost);
        this.listElement[4].innerHTML = "+ $" + DisplayNumber(this.moneyPerSec) + "/s";
    }
}


partTypes = ["Command", "Comms", "Engine", "Hull", "Power"];

ShipParts = []
ShipParts[0] = new ShipPart("Cockpit-mk1", 0, 100, [], 10,"");
ShipParts[1] = new ShipPart("Comms-mk1", 1, 100, [], 10,"");
ShipParts[2] = new ShipPart("Engine-mk1", 2, 100, [], 10,"");
ShipParts[3] = new ShipPart("Hull-mk1", 3, 100, [], 10,"");
ShipParts[4] = new ShipPart("Power-mk1", 4, 100, [], 10,"");
ShipParts[5] = new ShipPart("Cockpit-mk2", 0, 1000, [], 10,"");
ShipParts[6] = new ShipPart("Comms-mk2", 1, 1000, [], 10,"");
ShipParts[7] = new ShipPart("Engine-mk2", 2, 1000, [], 10,"");
ShipParts[8] = new ShipPart("Hull-mk2", 3, 1000, [], 10,"");
ShipParts[9] = new ShipPart("Power-mk2", 4, 1000, [], 10,"");

addMoneyButton.addEventListener('click', AddMoney);

game.moneyPerSec = 1;

function AddMoney() {
    game.money += game.moneyPerSec / 10 + 10;
}


MoneyUpgrades = [];
MoneyUpgrades[0] = new MoneyUpgrade("Robbing The elderly", 1, 0.1, "You monster!");
MoneyUpgrades[1] = new MoneyUpgrade("Stealing lollipops from children", 10, 1, "Why are you doing this?");
MoneyUpgrades[2] = new MoneyUpgrade("Begging", 100, 10, "You're a good person, but you're also a bad person.");
MoneyUpgrades[3] = new MoneyUpgrade("Finding pennies on the ground", 1000, 100, "Enjoying yourself?");



let currentMoneyUpgrade = 0;
let currentShipPart = 0;

//Main game loop
setInterval(() => {
    game.money += game.moneyPerSec / 1000;
    moneyElement.innerHTML = "$" + DisplayNumber(game.money);
    moneyPerSecondElement.innerHTML = "$" + DisplayNumber(game.moneyPerSec) + "/s";

    if (MoneyUpgrades[currentMoneyUpgrade] != null) {
        if (game.money >= MoneyUpgrades[currentMoneyUpgrade].cost) {
            AddMoneyUpgrade(MoneyUpgrades[currentMoneyUpgrade]);
            currentMoneyUpgrade++;
        }
    }

    if (ShipParts[currentShipPart] != null) {
        if (game.money >= ShipParts[currentShipPart].cost) {
            AddShipPart(ShipParts[currentShipPart]);
            currentShipPart++;
        }
    }

    
    MoneyUpgrades.forEach(element => {
        if (game.money < element.cost) {
            element.listElement[0].disabled = true;
        } else {
            element.listElement[0].disabled = false;
        }
    })

    ShipParts.forEach(element => {
        if (game.money < element.cost) {
            element.listElement[0].disabled = true;
        } else {
            element.listElement[0].disabled = false;
        }
    })





}, 1);

function AddMoneyUpgrade(item) {
    item.CreateElements();
    moneyUpgradesListElement.appendChild(item.listElement[0]);
    item.listElement[0].addEventListener('click', () => {
        BuyUpgrade(item);
    });
}

function AddShipPart(item) {
    item.CreateElements();
    shipPartsListElement.appendChild(item.listElement[0]);
    item.listElement[0].addEventListener('click', () => {
        BuyShipPart(item);
    });
}

function BuyUpgrade(item) {
    if (game.money >= item.cost) {
        game.money -= item.cost;
        game.moneyPerSec += item.moneyPerSec;
        item.amount++;
        item.updateCost();
        item.UpdateElements();
    }
}

let ownedParts = [];

function BuyShipPart(item) {
    if (item.owned == false) {
        if (game.money >= item.cost) {
            FilterOwnedParts(0);
            game.money -= item.cost;
            shipPartsListElement.removeChild(item.listElement[0]);

            ownedParts.push(item)
            item.SetOwned();
        }
    } else {
        console.log(item.name + " installed")
    }
}