console.log('test main')
// global variables
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
var threeTopTimes = [];
var playAgainButton = document.querySelector('.play-again')
var gamePage = document.querySelector('.game-page')
var beginGameButton = document.querySelector('.begin-game-button')
var playerNameLineOne = document.querySelector('.player-name-line1');
var playerOne;
var playerTwo;


// event listeners
beginGameButton.addEventListener('click', goToGame)
playAgainButton.addEventListener('click', refreshGamePage)
gamePage.addEventListener('click', selectCard);
window.addEventListener('load', callDeck)

function callDeck() {
  // clearStorage()
  deck.addCardsToDeck();
  getTopTimes()
}

// function for if wrong cards are selected...will wait 2 seconds then flip cards back over...
function waitThenFlip() {
  lockCards = true;
  var timeoutId = window.setTimeout(flipIncorrects, 2 * 1000);
}

// if cards are incorrect, they will flip back over
function flipIncorrects() {
  lockCards = false;
  for (var i = 0; i < deck.selectedDivs.length; i++) {
    var currentDiv = deck.selectedDivs[i]
    currentDiv.classList.remove('flip')
    console.log(currentDiv)
  }
  deck.selectedDivs = []
  deck.selectedCards = []
}

// flips a card when clicked, invokes pushCardToSelected()
function selectCard(event) {
  var currentCard = event.target.closest('.flip-container')
  if (cardsClicked === 0) {
    cardsClicked++
    startTimer()
  }
  if (lockCards) {
    return;
  }
  currentCard.classList.toggle('flip')
  pushCardToSelected();
}

// will push a card to the decks selected cards
function pushCardToSelected() {
  var currentCard = event.target.closest('.flip-container')
  if ((currentCard.classList.contains('flip')) && (deck.selectedCards.length < 2)) {
    for (var i = 0; i < deck.cards.length; i++) {
      if (event.target.dataset.id == deck.cards[i].id) {
        deck.cards[i].selected = true;
        deck.selectedCards.push(deck.cards[i])
        pushDivToSelected()
      }
      if ((deck.selectedCards.length === 2) && (deck.selectedCards[0].id == deck.selectedCards[1].id)) {
        deck.selectedCards.pop();
        removeDivFromSelected()
      }
    }
    deck.checkSelectedCards();
  }
}

function pushDivToSelected() {
  var currentCard = event.target.closest('.flip-container')
  deck.selectedDivs.push(currentCard)
}

function removeDivFromSelected() {
  var currentCard = event.target.closest('.flip-container')
  deck.selectedDivs.pop();
}

// lays cards out on the screen, face down
function displayCards() {
  for (var i = 0; i < 10; i++) {
    gamePage.insertAdjacentHTML('beforeend',
      `<div class="box flip-container card-placeholder-${[i]}" data-id="${deck.cards[i].id}" data-matchinfo="${deck.cards[i].matchinfo}">
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

// increases the match count when a match is made
function increaseMatches() {
  var numOfMatchesArea = document.querySelector('.num-of-matches')
  var numOfMatches = deck.matchedCards.length / 2
  numOfMatchesArea.innerHTML = `${numOfMatches}`
  displayMatchedCards();
  if (numOfMatches === 5) {
    switchToCongrats()
  }
}

// removes game page and displays the congrats page
function switchToCongrats() {
  var winPage = document.querySelector('.win-page')
  var aside = document.querySelector('.aside')
  displayTime();
  aside.classList.add('hide')
  gamePage.classList.add('hide');
  winPage.classList.remove('hide')
  window.clearTimeout(timer);
}

// timer
function startTimer() {
  totalSeconds = 0;
  timer = setInterval(function() {
    totalSeconds = totalSeconds + 1;
  }, 1000)
};

// displays time on congrats screen
function displayTime() {
  console.log(totalSeconds);
  var timePlayed = document.querySelector('.time-played');
  if (totalSeconds < 60) {
    timePlayed.innerHTML = `${totalSeconds} SECS`
  } else {
    var minutes = parseInt((totalSeconds / 60), 10)
    var seconds = (totalSeconds % 60)
    timePlayed.innerHTML = `${minutes} MIN ${seconds} SEC`
  }
  findTopTimes()
}

// refreshes game page for new game
function refreshGamePage() {
  var winPage = document.querySelector('.win-page')
  var aside = document.querySelector('.aside')
  winPage.classList.add('hide')
  aside.classList.remove('hide')
  gamePage.classList.remove('hide')
  storeTopTimes()
  refreshGameData()
}

// refreshes game page data for new game
function refreshGameData() {
  deck.cards = []
  deck.matchedCards = [];
  deck.selectedCards = [];
  deck.selectedDivs = []
  deck.matchedDivs = [];
  totalSeconds = 0;
  cardsClicked = 0;
  refreshPageData();
}

// resets side bar matches this round to 0
function refreshPageData() {
  var numOfMatchesArea = document.querySelector('.num-of-matches')
  numOfMatchesArea.innerHTML = 0
  clearDisplayMatchedCards();
}

// function to sort numerically starting with lowest number
function sortNumber(a, b) {
  return a - b
}

// finds and sorts the top three times
function findTopTimes() {
  var totalSecondsThisRound = totalSeconds
  threeTopTimes.push(totalSecondsThisRound)
  if (threeTopTimes.length <= 3) {
    threeTopTimes.sort(sortNumber)
  } else if (threeTopTimes.length > 3) {
    threeTopTimes.sort(sortNumber)
    threeTopTimes.pop()
  }
  displayTopTimes()
}

// will display top 3 times but only in seconds...minutes on backburner..
function displayTopTimes() {
  var topThreeDisplay1 = document.querySelector('.num-one-time');
  var topThreeDisplay2 = document.querySelector('.num-two-time');
  var topThreeDisplay3 = document.querySelector('.num-three-time');
  if (threeTopTimes.length === 3) {
    topThreeDisplay1.innerHTML = `${threeTopTimes[0]} SECS`
    topThreeDisplay2.innerHTML = `${threeTopTimes[1]} SECS`
    topThreeDisplay3.innerHTML = `${threeTopTimes[2]} SECS`
  } else if (threeTopTimes.length === 2) {
    topThreeDisplay1.innerHTML = `${threeTopTimes[0]} SECS`
    topThreeDisplay2.innerHTML = `${threeTopTimes[1]} SECS`
  } else if (threeTopTimes.length === 1) {
    topThreeDisplay1.innerHTML = `${threeTopTimes[0]} SECS`
  }
}

//moves matched card picture to side bar
function displayMatchedCards() {
  var matchedCard0 = document.querySelector('.matched-1');
  var matchedCard2 = document.querySelector('.matched-2');
  var matchedCard4 = document.querySelector('.matched-3');
  var matchedCard6 = document.querySelector('.matched-4');
  var matchedCard8 = document.querySelector('.matched-5');
  // attempt to refactor, not working however.
  // for (var i = 0; i < deck.matchedCards.length; i+= 2) {
  //   console.log(deck.matchedCards);
  //   matchedCard[i].innerHTML = `<img class="matched-cards" src="${deck.matchedCards[i].image}"
  // data-imageinfo="${deck.matchedCards[i].image}" />`;
  // }
  matchedCard0.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[0].image}"
  data-imageinfo="${deck.matchedCards[0].image}" />`;
  matchedCard2.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[2].image}"
  data-imageinfo="${deck.matchedCards[2].image}" />`;
  matchedCard4.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[4].image}"
  data-imageinfo="${deck.matchedCards[4].image}" />`
  matchedCard6.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[6].image}"
  data-imageinfo="${deck.matchedCards[6].image}" />`;
  matchedCard8.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[8].image}"
  data-imageinfo="${deck.matchedCards[8].image}" />`;
  deck.checkDivs()
}

// clears side bar pictures for new game
function clearDisplayMatchedCards() {
  var matchedCardOne = document.querySelector('.matched-1');
  var matchedCardTwo = document.querySelector('.matched-2');
  var matchedCardThree = document.querySelector('.matched-3');
  var matchedCardFour = document.querySelector('.matched-4');
  var matchedCardFive = document.querySelector('.matched-5');
  matchedCardOne.innerHTML = ` `;
  matchedCardTwo.innerHTML = ` `;
  matchedCardThree.innerHTML = ` `;
  matchedCardFour.innerHTML = ` `;
  matchedCardFive.innerHTML = ` `;
  callDeck();
}

// function to clear local storage...need to call on window load by uncommenting
function clearStorage() {
  localStorage.clear()
}

// store top three times in local storage
function storeTopTimes() {
  var storeThreeTopTimes = threeTopTimes
  if (storeThreeTopTimes.length === 1) {
    var topOne = JSON.stringify(storeThreeTopTimes[0])
    localStorage.setItem('topOne', topOne)
  } else if (storeThreeTopTimes.length === 2) {
    var topOne = JSON.stringify(storeThreeTopTimes[0])
    localStorage.setItem('topOne', topOne)
    var topTwo = JSON.stringify(storeThreeTopTimes[1])
    localStorage.setItem('topTwo', topTwo)
  } else if (storeThreeTopTimes.length === 3) {
    var topOne = JSON.stringify(storeThreeTopTimes[0])
    localStorage.setItem('topOne', topOne)
    var topTwo = JSON.stringify(storeThreeTopTimes[1])
    localStorage.setItem('topTwo', topTwo)
    var topThree = JSON.stringify(storeThreeTopTimes[2])
    localStorage.setItem('topThree', topThree)
  }
}

// retrieve top three times from local storage
function getTopTimes() {
  var stringTopOne = localStorage.getItem('topOne')
  var stringTopTwo = localStorage.getItem('topTwo')
  var stringTopThree = localStorage.getItem('topThree')
  var topOne = JSON.parse(stringTopOne)
  var topTwo = JSON.parse(stringTopTwo)
  var topThree = JSON.parse(stringTopThree)
  var getTopThreeTimes = [];
  if (topOne === null) {
    return
  } else if (topTwo === null) {
    getTopThreeTimes.push(topOne)
  } else if (topThree === null) {
    getTopThreeTimes.push(topOne)
    getTopThreeTimes.push(topTwo)
  } else {
    getTopThreeTimes.push(topOne)
    getTopThreeTimes.push(topTwo)
    getTopThreeTimes.push(topThree)
  }
  threeTopTimes = getTopThreeTimes
  displayTopTimes()
}

function goToGame() {
  var twoPlayerPage = document.querySelector('.enter-names-page');
  var aside = document.querySelector('.aside')
  playerOne = document.querySelector('.player-one-name').value;
  playerTwo = document.querySelector('.player-two-name').value;
  twoPlayerPage.classList.add('hide')
  aside.classList.remove('hide')
  gamePage.classList.remove('hide')
  playerNameLineOne.innerHTML = `${playerOne}'s`;
}

function switchToCongrats() {
  var winPage = document.querySelector('.win-page')
  var aside = document.querySelector('.aside')
  displayTime();
  aside.classList.add('hide')
  gamePage.classList.add('hide');
  winPage.classList.remove('hide')
  window.clearTimeout(timer);
}
