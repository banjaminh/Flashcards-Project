const { evaluateGuess } = require("./card")

module.exports = {
   createRound, 
   takeTurn,
   endRound,
   calculatePercentCorrect,
}

function createRound(deck){
    return {
        deck: deck,
        turns: 0,
        get currentCard(){
            return this.deck[this.turns]
        },
        incorrectGuesses: [],
        startTime: new Date(),
    }
}


function takeTurn(guess,round){
    const eval = evaluateGuess(guess,round.currentCard.correctAnswer);
    if (eval === true){
        round.turns++;
        round.currentCard = round.deck[round.turns];
        return `correct!`;
    }
    else {
        round.incorrectGuesses.push(round.currentCard);
        round.turns++;
        round.currentCard = round.deck[round.turns];
        return `incorrect!`;
    }
}

function endRound(round){
    console.log(`** Round over! ** You answered of ${calculatePercentCorrect(round)} the questions correctly!`);
    const finishTime = new Date();
    const totalTime = finishTime - round.startTime;
    const timeSeconds = Math.floor(totalTime/1000);
    console.log(`It took you ${timeSeconds} seconds to finish the game!`);
}

function calculatePercentCorrect(round){
    const perfecntCorrect = (((30 - round.incorrectGuesses.length)/30)*100).toFixed(2);
    return perfecntCorrect+`%`; 
}