// var cardOne = new Card('assets/images')
console.log('test main')
var deck = new Deck();

var cardOne = new Card('a', 'assets/images/Caddyshack.jpg');
var cardTwo = new Card('b', 'assets/images/Ghostbusters.jpg');
var cardThree = new Card('c', 'assets/images/Kingpin.jpg');
var cardFour = new Card('d', 'assets/images/LifeAquatic.jpg');
var cardFive = new Card('e', 'assets/images/Rushmore.jpeg');

function addCardsToDeck() {
  for (var i = 0; i < 2; i++) {
     deck.cards.push(cardOne);
     deck.cards.push(cardTwo);
     deck.cards.push(cardThree);
     deck.cards.push(cardFour);
     deck.cards.push(cardFive);
   }
 }

window.addEventListener('load', callDeck)
function callDeck() {
  addCardsToDeck();
  displayCards()
}

var gamePage = document.querySelector('.game-page')
gamePage.addEventListener('click', selectCard);

function selectCard(event) {
  var currentCard = event.target.closest('.flip-container')
  currentCard.classList.toggle('flip')
  console.log(currentCard)
  // var currentCardClassList = currentCard.classList
  // console.log(currentCardClassList)

  // have less than/equal to 2...may need to increase if need 3 temporarily before a pop/unshift, etc
  if ((currentCard.classList.contains('flip')) && (deck.selectedCards.length < 2)) {
  deck.selectedCards.push(currentCard);
  // console.log(deck.selectedCards)
  }
    console.log(currentCard.dataset.matchinfo)
  deck.checkSelectedCards();
}


function displayCards() {
  for (var i = 0; i < 10; i++) {
    gamePage.insertAdjacentHTML('beforeend',
    `<div class="box flip-container card-placeholder-${[i]}" data-matchinfo="${deck.cards[i].matchinfo}">
        <div class="flipper">
          <div class="front box">
          <p>B</p>
          </div>
          <div class="back">
            <img class="card-image" src="${deck.cards[i].image}" data-imageinfo="${deck.cards[i].image}"/>
          </div>
        </div>
    </div>
    `)
  }
}
