const chai = require('chai');
const expect = chai.expect;

const { createCard,evaluateGuess,createDeck,countCards } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe(`turn`, function() {
  it(`returns correct if the guess is right`, function(){
    const userGuess = `object`;
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const eval = evaluateGuess(userGuess,card.correctAnswer);
    expect(eval).to.deep.equal(`correct!`);
  });

  it(`should return incorrect if wrong`, function(){
    const userGuess = `array`;
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const eval = evaluateGuess(userGuess,card.correctAnswer);
    expect(eval).to.deep.equal(`incorrect!`);
  });
});

describe(`deck`, function(){
  it(`should create a deck array`, function(){
    const cards = [`1,2,3`];
    expect(createDeck(cards)).to.be.a('array');
  });

  it(`should know how many cards are in deck`, function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cardArray = [card1,card2,card3];
    const deck = createDeck(cardArray);
    expect(countCards(deck)).to.deep.equal(3);
  })

})

