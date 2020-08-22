let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

const BLUE = document.querySelector('.blue-btn');
const RED = document.querySelector('.red-btn');
const GREEN = document.querySelector('.green-btn');
const YELLOW = document.querySelector('.yellow-btn');

//create random order of colors
let shuffleOrder = () => {
    let randomColor = Math.floor(Math.random * 4);
    order[order.length] = randomColor;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//light next color up
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, time - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//check click order with correct sequence
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`total points: ${score}\nyou got it! starting next level`);
        nextLevel();
    }
}

//function for user click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder();
}