module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
}

function createCard(id,question,answers,correctAnswer){
    const card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
    return card;
}

function evaluateGuess(guess,correctAnswer){
    if(guess === correctAnswer){
        return true;
    }
    else{
        return false;
    }
}

function createDeck(cards){
   const deck = cards;
   return deck;
}

function countCards(deck){
    const cardAmount = deck.length;
    return cardAmount;
}