let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

const GREEN = document.querySelector('.green-btn');
const RED = document.querySelector('.red-btn');
const YELLOW = document.querySelector('.yellow-btn');
const BLUE = document.querySelector('.blue-btn');

//create random order of colors
let shuffleOrder = () => {
    let randomColor = Math.floor(Math.random() * 4);
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
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//check click order with correct sequence
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`total score: ${score}\nyou got it! starting next level`);
        nextLevel();
    }
}

//function for user click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//function that returns a color
let createColorElement = (color) => {
    if (color == 0) {
        return GREEN;
    } else if (color == 1) {
        return RED;
    } else if (color == 2) {
        return YELLOW;
    } else if (color == 3) {
        return BLUE;
    }
}

//function for next level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//function for game over
let gameOver = () => {
    alert(`total score: ${score}\nyou lost! try again!`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`welcome to the game! click to start!`)
    score = 0;

    nextLevel();
}

GREEN.onclick = () => click(0);
RED.onclick = () => click(1);
YELLOW.onclick = () => click(2);
BLUE.onclick = () => click(3);

playGame();