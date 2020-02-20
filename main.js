var cardOne = new Card('assets/images')

var deck = new Deck();
window.addEventListener('load', callDeck)

function callDeck() {
  deck.createDeck()
  displayDeck()
}

var gamePage = document.querySelector('.game-page')
// gamePage.addEventListener('click', showImage);

function displayDeck() {
  var cardNum = 0;
  for (var i = 1; i < 11; i++) {
    // insert adjacent html for each di
    gamePage.insertAdjacentHTML('beforeend', `'<div class="box placeholder-${[i]}">B${[i]}</div>'`)
    // add place holder class by interpolating the increment placeholder-${[i]}
}
}



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
