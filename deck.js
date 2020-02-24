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
      // generates random number between 0-9
      x = this.cards[i];
      //initial value of array index
      this.cards[i] = this.cards[j];
      //moves array index i to new position of array index j
      this.cards[j] = x;
      // moves j index back to original i index
  }
  return this.cards;
}

checkSelectedCards(){
  var selectedOne = this.selectedCards[0];
  var selectedTwo = this.selectedCards[1];
  // console.log(selectedOne.matchinfo)
  // console.log(selectedTwo.matchinfo)
  if ((this.selectedCards.length == 2) && (selectedOne.matchinfo == selectedTwo.matchinfo)) {
    this.moveToMatched()
  } else if ((this.selectedCards.length === 2) && (selectedOne.matchinfo !== selectedTwo.matchinfo)) {
    waitThenFlip()
    // var timeoutID = window.setTimeout(waitThenFlip, 2 * 1000)
    // this.selectedCards = [];
    // cardsCurSelected = 0;

  }

  // console.log(this.selectedCards)
  // console.log(this.selectedCards.length)
  // console.log(this.matchedCards)
//checking selected cards for a match.  If a match, invoking moveToMatched() function to
//pairs to selectedCard[] array.
}

checkDivs() {
  var cardOne = this.selectedDivs[0];
  var cardTwo = this.selectedDivs[1];
  if ((this.selectedDivs.length === 2) && (cardOne.dataset.matchinfo === cardTwo.dataset.matchinfo)) {
    cardOne.classList.add('hide')
    cardTwo.classList.add('hide')
    this.selectedDivs = [];
  // } else if ((this.selectedDivs.length === 2) && (cardOne.dataset.matchinfo !== cardTwo.dataset.matchinfo)) {
  //   this.selectedDivs = [];
  }
}
moveToMatched() {
  var selectedOne = this.selectedCards[0];
  var selectedTwo = this.selectedCards[1];
  selectedOne.matched = true;
  selectedTwo.matched = true;
  this.matchedCards.push(selectedOne)
  this.matchedCards.push(selectedTwo)
  this.selectedCards = [];
  // cardsCurSelected = 0;
  
  this.checkDivs()

  increaseMatches()
  }

}

console.log('test-deck')
