function createCards() {

  var cardOne = new Card('Caddyshack', assets/images/Caddyshack.jpg);
  var cardTwo = new Card('Caddyshack', assets/images/Caddyshack.jpg);
  var cardThree = new Card;
  var cardFour = new Card;
  var cardFive = new Card;
  var cardSix = new Card;
  var cardSeven = new Card;
  var cardEight = new Card;
  var cardNine = new Card;
  var cardTen = new Card;

}

var gamePage = document.querySelector('.game-page');

gamePage.addEventListener('click', showImage);

function showImage(event) {
  var cardClicked = event.target;
  if ((cardClicked.classList.contains('placeholder-1')) ||
    (cardClicked.classList.contains('placeholder-6'))) {
    cardClicked.innerHTML =
    `${cardOne}`;
      // `<img src="assets/images/Caddyshack.jpg" />`
  } else if ((cardClicked.classList.contains('placeholder-2')) ||
    (cardClicked.classList.contains('placeholder-7'))) {
    cardClicked.innerHTML =
      `<img src="assets/images/Ghostbusters.jpg" />`
  } else if ((cardClicked.classList.contains('placeholder-3')) ||
    (cardClicked.classList.contains('placeholder-8'))) {
    cardClicked.innerHTML =
      `<img src="assets/images/Kingpin.jpg" />`
  } else if ((cardClicked.classList.contains('placeholder-4')) ||
    (cardClicked.classList.contains('placeholder-9'))) {
    cardClicked.innerHTML =
      `<img src="assets/images/LifeAquatic.jpg" />`
  }
  else if((cardClicked.classList.contains('placeholder-5')) ||
    (cardClicked.classList.contains('placeholder-10'))) {
      cardClicked.innerHTML =
      `<img src="assets/images/Rushmore.jpeg" />`
    }
}
