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
// var timerForFlip;
var totalSeconds = 0;
var threeTopTimes = []
// var matchedCardsAside = [];



var gamePage = document.querySelector('.game-page')
gamePage.addEventListener('click', selectCard);

window.addEventListener('load', callDeck)
function callDeck() {
  // debugger
  getTopTimes()
  addCardsToDeck();
  // clearStorage();
  // displayCards();
  // loadLocalStorage();
  // getTopTimes()
  // displayTopTimes();
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
     deck.shuffle()
     displayCards();
 }

// function for if wrong cards are selected...will wait 2 seconds then flip cards back over...
function waitThenFlip() {
  // console.log('made it to waitThenFlip function')
  lockCards = true;
  var timeoutId = window.setTimeout(flipIncorrects, 2 * 10);

  // var timeoutId = window.setTimeout(flipIncorrects, 2 * 1000);
}

function flipIncorrects() {
  lockCards = false;
  // console.log(deck.selectedCards.length)
  // console.log(deck.selectedDivs.length)
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
  if ((currentCard.classList.contains('flip')) && (deck.selectedCards.length < 2)) {
    for (var i = 0; i < deck.cards.length; i++) {
      if (event.target.dataset.id == deck.cards[i].id) {
        deck.cards[i].selected = true;
        // console.log(deck.cards[i])
        deck.selectedCards.push(deck.cards[i])
        deck.selectedDivs.push(currentCard)
      }
      if ((deck.selectedCards.length === 2) && (deck.selectedCards[0].id == deck.selectedCards[1].id)) {
        deck.selectedCards.pop();
        deck.selectedDivs.pop();
      }
    }
    // console.log(deck.selectedCards.length)
    deck.checkSelectedCards();
  }
}

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
  // getTopTimes()
}

function increaseMatches() {
  var numOfMatchesArea = document.querySelector('.num-of-matches')
  var numOfMatches = deck.matchedCards.length/2
  numOfMatchesArea.innerHTML = `${numOfMatches}`

  displayMatchedCards();
  // console.log(numOfMatches)
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
  var timePlayed = document.querySelector('.time-played');
  // var displayMins = document.querySelector('.display-mins');
  if (totalSeconds < 60) {
    timePlayed.innerHTML = `${totalSeconds} SECS`
  }
  else {
    var minutes = parseInt((totalSeconds / 60), 10)
    var seconds = (totalSeconds % 60)
    timePlayed.innerHTML = `${minutes} MIN ${seconds} SEC`
    // displaySecs.innerHTML = `${seconds} SEC`;
  }
  findTopTimes()
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
  storeTopTimes()
  refreshGameData()
  // displayTopTimes()

  // setLocalStorage()

}

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

function refreshPageData() {
  var numOfMatchesArea = document.querySelector('.num-of-matches')
  numOfMatchesArea.innerHTML = 0
  clearDisplayMatchedCards();
  // callDeck();
}
// function to sort
function sortNumber(a, b) {
  return a - b
}

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
  // console.log(threeTopTimes)
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
  } else if (threeTopTimes.length === 1 ) {
  topThreeDisplay1.innerHTML = `${threeTopTimes[0]} SECS`
  }
}

function displayMatchedCards() {

  var matchedCardOne = document.querySelector('.matched-1');
  var matchedCardTwo = document.querySelector('.matched-2');
  var matchedCardThree = document.querySelector('.matched-3');
  var matchedCardFour = document.querySelector('.matched-4');
  var matchedCardFive = document.querySelector('.matched-5');
  console.log(deck.matchedCards);
  matchedCardOne.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[0].image}"
  data-imageinfo="${deck.matchedCards[0].image}" />`;
  matchedCardTwo.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[2].image}"
  data-imageinfo="${deck.matchedCards[2].image}" />`;
  matchedCardThree.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[4].image}"
  data-imageinfo="${deck.matchedCards[4].image}" />`
  matchedCardFour.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[6].image}"
  data-imageinfo="${deck.matchedCards[6].image}" />`;
  matchedCardFive.innerHTML = `<img class="matched-cards" src="${deck.matchedCards[8].image}"
  data-imageinfo="${deck.matchedCards[8].image}" />`;
  deck.checkDivs()
}

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

function clearStorage() {
  localStorage.clear()
}

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
  // console.log('set storage')
  // console.log(storeThreeTopTimes)
}


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
    // console.log('get storage end')
    // console.log(threeTopTimes)
    displayTopTimes()
}



// function storeTopTimes() {
//   // findTopTimes()
//   // if (threeTopTimes.length === 0) {
//   //   return;
// // } else
//   var storeThreeTopTimes = threeTopTimes
// if (threeTopTimes.length === 1) {
//   var topOne = JSON.stringify(threeTopTimes[0])
//   localStorage.setItem('topOne', topOne)
// } else if (threeTopTimes.length === 2) {
//   var topOne = JSON.stringify(threeTopTimes[0])
//   localStorage.setItem('topOne', topOne)
//   var topTwo = JSON.stringify(threeTopTimes[1])
//   localStorage.setItem('topTwo', topTwo)
// } else if (threeTopTimes.length === 3) {
//   var topOne = JSON.stringify(threeTopTimes[0])
//   localStorage.setItem('topOne', topOne)
//   var topTwo = JSON.stringify(threeTopTimes[1])
//   localStorage.setItem('topTwo', topTwo)
//   var topThree = JSON.stringify(threeTopTimes[2])
//   localStorage.setItem('topThree', topThree)
// }
//   console.log('set storage')
//   console.log(threeTopTimes)
// }

// function getTopTimes() {
//   console.log('get storage start')
// //   if (threeTopTimes.length === 0) {
// //   return
// // } else
// if (threeTopTimes.length === 1) {
//     var stringTopOne = localStorage.getItem('topOne')
//     var topOne = JSON.parse(stringTopOne)
//     threeTopTimes.push(topOne)
//     // console.log(threeTopTimes)
//   }
//   else if (threeTopTimes.length === 2) {
//     var stringTopOne = localStorage.getItem('topOne')
//     var topOne = JSON.parse(stringTopOne)
//     var stringTopTwo = localStorage.getItem('topTwo')
//     var topTwo = JSON.parse(stringTopTwo)
//     threeTopTimes.push(topOne)
//     threeTopTimes.push(topTwo)
//     // console.log(threeTopTimes)
//   } else if (threeTopTimes.length === 3) {
//     var stringTopOne = localStorage.getItem('topOne')
//     var topOne = JSON.parse(stringTopOne)
//     var stringTopTwo = localStorage.getItem('topTwo')
//     var topTwo = JSON.parse(stringTopTwo)
//     var stringTopThree = localStorage.getItem('topThree')
//     var topThree = JSON.parse(stringTopThree)
//     threeTopTimes.push(topOne)
//     threeTopTimes.push(topTwo)
//     threeTopTimes.push(topThree)
//   }
//     // console.log(threeTopTimes)
//   // console.log(getTopTimes running)
//     console.log('get storage end')
//     console.log(threeTopTimes)
// }


//
// function getTopTimes() {
//   console.log('getTopTimes function running')
//   // var savedTopOne = JSON.parse(localStorage.getItem('topOne'))
//   // var savedTopTwo = JSON.parse(localStorage.getItem('topTwo'))
//   // var savedTopThree = JSON.parse(localStorage.getItem('topThree'))
//
//   displayTopTimes()
// }

// mess around with local storage
// function setLocalStorage() {
//   var stringifiedThreeTopTimes = JSON.stringify(threeTopTimes)
//   localStorage.setItem('top3', stringifiedThreeTopTimes)
  // for (var i = 0; i < threeTopTimes.length; i++) {
  //   localStorage.setItem(`'top${[i]}'`, threeTopTimes[i])
  // }
  // console.log('local set!')


// function loadLocalStorage() {
//   var retrievedThreeTopTimes = localStorage.getItem('top3')
//   var parsedThreeTopTimes = JSON.parse(retrievedThreeTopTimes)

//   for (var i = 0; i < 4; i++) {
//   threeTopTimes.push(localStorage.getItem(`'top${[i]}'`))
//   }
//   // console.log('local storage got!')
// }
