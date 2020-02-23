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
var lockCards = false;
var cardsClicked = 0;
var timer;
var totalSeconds = 0;

var gamePage = document.querySelector('.game-page')
gamePage.addEventListener('click', selectCard);

window.addEventListener('load', callDeck)
function callDeck() {
  addCardsToDeck();
  displayCards()
}

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

// function for if wrong cards are selected...will wait 2 seconds then flip cards back over...
function waitThenFlip() {
  console.log('made it to waitThenFlip function')
  lockCards = true;
  var timeoutId = window.setTimeout(flipIncorrects, 2 * 1000);
}

function flipIncorrects() {
  lockCards = false;
  console.log(deck.selectedCards.length)
  console.log(deck.selectedDivs.length)
  // debugger
  for (var i = 0; i < deck.selectedDivs.length; i++) {
    var currentDiv = deck.selectedDivs[i]
    currentDiv.classList.remove('flip')
    console.log(currentDiv)
  }
  deck.selectedDivs = []
  deck.selectedCards = []
}

function selectCard(event) {
  // debugger
  // cardsCurSelected++
    var currentCard = event.target.closest('.flip-container')
    if (cardsClicked === 0) {
      cardsClicked++
      startTimer()
    }
    if (lockCards) {
      return;
    }
    currentCard.classList.toggle('flip')
    // console.log(cardsCurSelected)
    pushCardToSelected();
  }


  function pushCardToSelected() {
    var currentCard = event.target.closest('.flip-container')
  if ((currentCard.classList.contains('flip')) &&        (deck.selectedCards.length < 2)) {
    for (var i = 0; i < deck.cards.length; i++) {
      if (event.target.dataset.id == deck.cards[i].id) {
        deck.cards[i].selected = true;
        // console.log(deck.cards[i])
        deck.selectedCards.push(deck.cards[i])
        deck.selectedDivs.push(currentCard)
      }
    }
    console.log(deck.selectedCards.length)
    deck.checkSelectedCards();
  }
}

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

function increaseMatches() {
  var numOfMatchesArea = document.querySelector('.num-of-matches')
  var numOfMatches = deck.matchedCards.length/2
  numOfMatchesArea.innerHTML = `${numOfMatches}`
  console.log(numOfMatches)
  if (numOfMatches === 5) {
    switchToCongrats()
  }
}

function switchToCongrats() {
  var winPage = document.querySelector('.win-page')
  var aside = document.querySelector('.aside')
  displayTime();
  // window.clearTimeout(timer);
  aside.classList.add('hide')
  gamePage.classList.add('hide');
  winPage.classList.remove('hide')
  window.clearTimeout(timer);
}

// timer section
function startTimer() {
    totalSeconds = 0;
    timer = setInterval(function() {
    totalSeconds = totalSeconds + 1;
    // console.log(totalSeconds);
    }, 1000)};

function displayTime() {
  console.log(totalSeconds);
  // var displayTimeArea = document.querySelector();
  var displaySecs = document.querySelector('.display-secs');
  var displayMins = document.querySelector('.display-mins');
  if (totalSeconds < 60) {
    displaySecs.innerHTML = `${totalSeconds} SECS`
  }
  else {
    var minutes = parseInt((totalSeconds / 60), 10)
    var seconds = (totalSeconds % 60)
    displayMins.innerHTML = `${minutes} MIN`;
    displaySecs.innerHTML = `${seconds} SEC`;
  }
}

// play again button to restart game.
var playAgainButton = document.querySelector('.play-again')
playAgainButton.addEventListener('click', refreshGamePage)

function refreshGamePage() {
  var winPage = document.querySelector('.win-page')
  var aside = document.querySelector('.aside')
  winPage.classList.add('hide')
  aside.classList.remove('hide')
  gamePage.classList.remove('hide')
  refreshGameData()
}

function refreshGameData() {
  deck.cards = []
  deck.matchedCards = [];
  deck.selectedCards = [];
  deck.selectedDivs = []
  deck.matchedDivs = [];
  increaseMatches()
  callDeck();
}
