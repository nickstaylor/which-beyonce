class Deck {
  constructor(){
    this.cards = []
    this.matchedCards = [];
    this.selectedCards = [];
  }
shuffle(){
  // not really shuffling yet
//this method takes all cards, randomizes them, and then pushes each cards
//into the array of cards-maybe
// for (var i = 0; i < this.cards.length; i++) {
//   if (i < 2) {
//       this.cards[i].classList.add('caddyshack')
//     } else if ((i === 2) || (i === 3)) {
//       this.cards[i].classList.add('ghostba
}

checkSelectedCards(){
  var selectedOne = this.selectedCards[0];
  var selectedTwo = this.selectedCards[1];
  console.log(selectedOne.matchinfo)
  console.log(selectedTwo.matchinfo)
  if ((this.selectedCards.length == 2) && (selectedOne.matchinfo == selectedTwo.matchinfo)) {
    this.moveToMatched()
  } else if ((this.selectedCards.length === 2) && (selectedOne.matchinfo !== selectedTwo.matchinfo)) {
    this.selectedCards = [];
  }
  // console.log(this.selectedCards)
  // console.log(this.selectedCards.length)
  // console.log(this.matchedCards)
//checking selected cards for a match.  If a match, invoking moveToMatched() function to
//pairs to selectedCard[] array.
}

moveToMatched() {
  var selectedOne = this.selectedCards[0];
  var selectedTwo = this.selectedCards[1];
  selectedOne.matched = true;
  selectedTwo.matched = true;
  this.matchedCards.push(selectedOne)
  this.matchedCards.push(selectedTwo)
  this.selectedCards = [];
  removeCard()
// move matched cards to matchedCards array
}

// may not need the createDeck
//  createDeck() {
//    for (var i = 0; i < 10; i++) {
//      var card = new Card();
//      //code for adding [i] to name of each card
//      this.cards.push(card);
//    }
//  }

}

console.log('test-deck')
