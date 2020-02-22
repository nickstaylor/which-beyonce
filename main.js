// var cardOne = new Card('assets/images')
console.log('test main')
var deck = new Deck();

var cardZero = new Card('a', 'assets/images/Caddyshack.jpg', 0);
var cardOne = new Card('b', 'assets/images/Ghostbusters.jpg', 1);
var cardTwo = new Card('c', 'assets/images/Kingpin.jpg', 2);
var cardThree = new Card('d', 'assets/images/LifeAquatic.jpg', 3);
var cardFour = new Card('e', 'assets/images/Rushmore.jpeg', 4);
var cardFive = new Card('a', 'assets/images/Caddyshack.jpg', 5);
var cardSix = new Card('b', 'assets/images/Ghostbusters.jpg', 6);
var cardSeven = new Card('c', 'assets/images/Kingpin.jpg', 7);
var cardEight = new Card('d', 'assets/images/LifeAquatic.jpg', 8);
var cardNine = new Card('e', 'assets/images/Rushmore.jpeg', 9);

function addCardsToDeck() {
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
 }

window.addEventListener('load', callDeck)
function callDeck() {
  addCardsToDeck();
  displayCards()
}

var gamePage = document.querySelector('.game-page')
gamePage.addEventListener('click', selectCard);

// function onlyFlipTwo(event) {
//   if (deck.selectedCards.length <= 2) {
//     selectCard(event)
//   }
// }


function selectCard(event) {
  // debugger
  var currentCard = event.target.closest('.flip-container')
  currentCard.classList.toggle('flip')
  if ((currentCard.classList.contains('flip')) && (deck.selectedCards.length < 2)) {
    for (var i = 0; i < deck.cards.length; i++) {
      if (event.target.dataset.id == deck.cards[i].id) {
        deck.cards[i].selected = true;
        // console.log(deck.cards[i])
        deck.selectedCards.push(deck.cards[i])
      }
    }

    deck.checkSelectedCards();
  }
}

function removeCard() {
  // debugger
  var currentCard = event.target.closest('.flip-container')
  currentCard.classList.add('hide')
  // for (var i = 0; i < deck.matchedCards.length; i++) {
  //   if (deck.matchedCards[i].matched === true) {
  //     console.log(deck.matchedCards[i])
  //   }
  // }
}
// function selectCard(event) {
//   var currentCard = event.target.closest('.flip-container')
//   currentCard.classList.toggle('flip')
//   console.log(currentCard)
//   // var currentCardClassList = currentCard.classList
//   // console.log(currentCardClassList)
//   // have less than/equal to 2...may need to increase if need 3 temporarily before a pop/unshift, etc
//   if ((currentCard.classList.contains('flip')) && (deck.selectedCards.length < 2)) {
//   deck.selectedCards.push(currentCard);
//   // console.log(deck.selectedCards)
//   }
//     console.log(currentCard.dataset.matchinfo)
//     deck.checkSelectedCards();
// }


function displayCards() {
  for (var i = 0; i < 10; i++) {
    gamePage.insertAdjacentHTML('beforeend',
    `<div class="box flip-container card-placeholder-${[i]}" data-id="${[i]}" data-matchinfo="${deck.cards[i].matchinfo}">
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
