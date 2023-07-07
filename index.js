// This is where your project starts.
const { createDeck,createCard } = require("./src/card");
const { prototypeData } = require("./src/data");
const { createRound } = require("./src/round");
const { printMessage,printQuestion} = require("./src/game")

console.log('Your project is running...'); 


function start(){
    const cards = prototypeData;
    const deck = createDeck(cards);
    const round = createRound(deck);
    console.log(deck);
    printMessage(deck);
    printQuestion(round);
}


start();