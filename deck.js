class Deck {
  constructor(){
    this.cards = []
    this.matchedCards = [];
    this.selectedCards = [];
    this.selectedDivs = []
    this.matchedDivs = [];
  }
shuffle(){
  var j, x, i;
  for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
  }
  return this.cards;
}

 // add the cards to deck and then shuffle them, display them
addCardsToDeck() {
  deck.cards.push(cardZero);
  deck.cards.push(cardOne);
  deck.cards.push(cardTwo);
  deck.cards.push(cardThree);
  deck.cards.push(cardFour);
  deck.cards.push(cardFive);
  deck.cards.push(cardSix);
  deck.cards.push(cardSeven);
  deck.cards.push(cardEight);
  deck.cards.push(cardNine);
  deck.shuffle()
  displayCards();
}

// delay function for matched cards
waitOnMatchesThenFlip() {
  var matchedTimeout = setTimeout(this.moveToMatched.bind(this), 1.5 * 1000);
  console.log(deck.selectedDivs);
}

//check the selected cards for a match
checkSelectedCards(){
  var selectedOne = this.selectedCards[0];
  var selectedTwo = this.selectedCards[1];
  if ((this.selectedCards.length == 2) && (selectedOne.matchinfo == selectedTwo.matchinfo)){
    this.waitOnMatchesThenFlip();
  } else if ((this.selectedCards.length === 2) && (selectedOne.matchinfo !== selectedTwo.matchinfo)) {
    waitThenFlip()
  }
}
// hide cards if a match
checkDivs() {
  var cardOne = this.selectedDivs[0];
  var cardTwo = this.selectedDivs[1];
  if ((this.selectedDivs.length === 2) && (cardOne.dataset.matchinfo === cardTwo.dataset.matchinfo)) {
    cardOne.classList.add('hide')
    cardTwo.classList.add('hide')
    this.selectedDivs = [];
  }
}

//move matched cards into array
moveToMatched() {
  var selectedOne = this.selectedCards[0];
  var selectedTwo = this.selectedCards[1];
  selectedOne.matched = true;
  selectedTwo.matched = true;
  this.matchedCards.push(selectedOne)
  this.matchedCards.push(selectedTwo)
  this.selectedCards = [];
  this.checkDivs();
  increaseMatches()
  }

}
