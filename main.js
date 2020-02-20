var cardOne = new Card('assets/images')

var deck = new Deck();
var cardOne = new Card('a', 'assets/images/Caddyshack.jpg');
var cardTwo = new Card('b', 'assets/images/Ghostbusters.jpg');
var cardThree = new Card('c');
var cardFour = new Card();
var cardFive = new Card();

function addCardsToDeck() {
     deck.cards.push(cardOne);
     deck.cards.push(cardTwo);
     deck.cards.push(cardThree);
     deck.cards.push(cardFour);
     deck.cards.push(cardFive);
   }

window.addEventListener('load', callDeck)




// function callDeck() {
//   // deck.createDeck()
//   displayDeck()
// }

var gamePage = document.querySelector('.game-page')
// gamePage.addEventListener('click', showImage);

function displayDeck() {
  var cardNum = 0;
  for (var i = 1; i < 11; i++) {
    gamePage.insertAdjacentHTML('beforeend',
     `'<div class="box placeholder-${[i]}">
     <img src=${deck.cards[i].image} />
     </div>
     '`)
   }
 }


// function showImage(event) {
//   deck.shuffle();
//   var cardClicked = event.target;
//   if ((cardClicked.classList.contains('box')) {
//
//   }
// }

// function showImage(event) {
//   deck.shuffle();
//   var cardClicked = event.target;
//   if ((cardClicked.classList.contains('placeholder-1')) ||
//     (cardClicked.classList.contains('placeholder-6'))) {
//     cardClicked.innerHTML = `<img src="${cardOne.image}" />`
//
//       // `<img src="assets/images/Caddyshack.jpg" />`
//   } else if ((cardClicked.classList.contains('placeholder-2')) ||
//     (cardClicked.classList.contains('placeholder-7'))) {
//     cardClicked.innerHTML =
//       `${cardOne}`
//   } else if ((cardClicked.classList.contains('placeholder-3')) ||
//     (cardClicked.classList.contains('placeholder-8'))) {
//     cardClicked.innerHTML =
//       `<img src="assets/images/Kingpin.jpg" />`
//   } else if ((cardClicked.classList.contains('placeholder-4')) ||
//     (cardClicked.classList.contains('placeholder-9'))) {
//     cardClicked.innerHTML =
//       `<img src="assets/images/LifeAquatic.jpg" />`
//   }
//   else if((cardClicked.classList.contains('placeholder-5')) ||
//     (cardClicked.classList.contains('placeholder-10'))) {
//       cardClicked.innerHTML =
//       `<img src="assets/images/Rushmore.jpeg" />`
//     }
// }
