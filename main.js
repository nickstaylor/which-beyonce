// var cardOne = new Card('assets/images')

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
  // loadImagesToCards()
  // deck.createDeck()
  // displayCards()
}

var gamePage = document.querySelector('.game-page')
gamePage.addEventListener('click', selectCard);



// function loadImagesToCards() {
//   var select = event.target;
//   console.log(select);
//   for (var i = 0; i < 10; i++) {
//     if (event.target.classList.contains(`placeholder-${[i]}`)) {
//     currentDiv.innerHTML = `<img class="hide" src=${deck.cards[i].image} />`
//   }
// }
// }

// function loadImagesToCards() {
//   console.log(select)
//   var select = event.target;
//   for (var i = 0; i < 10; i++) {
//     gamePage.insertAdjacentHTML('beforeend',
//     `'<div class="box card-image image-placeholder-${[i]}">
//       <img class="card-image" src=${deck.cards[i].image} />
//     </div>
//     '`
//     )
//   }
// }

function displayCards() {
  for (var i = 0; i < 10; i++) {
    gamePage.insertAdjacentHTML('beforeend',
    `<div class="box flip-container card-placeholder-${[i]}" data-matchinfo="${deck.cards[i].matchInfo}"">
        <div class = "flipper">
          <div class="front box card-placeholder-${[i]}>"
          <p>Front</p>
          </div>
          <div class="back">
            <img class="card-image hide" data-image="${deck.cards[i].image}"  src="${deck.cards[i].image}" />
          </div>
        </div>
    </div>
    `)
  }
}
// function displayCards() {
//   for (var i = 0; i < 10; i++) {
//     gamePage.insertAdjacentHTML('beforeend',
//     `'<div class="box card-holder card-placeholder-${[i]}" data-matchinfo="${deck.cards[i].matchInfo}">
//     <img class="card-image hide" data-image="${deck.cards[i].image}"  src=${deck.cards[i].image} />
//     </div>
//     '`
//     )
//   }
// }

function selectCard(event) {
  var selected = event.target.dataset.matchinfo
  console.log(selected);
  var imageSelected = event.target.dataset.image
  console.log(imageSelected)


}


// var cardImages = document.querySelectorAll('card-image')
// function seperateImages(images) {
//   for
// }
// console.log(cardHolder)
// function selectCard(event) {
//   var card = event.target
//   console.log(card)
    // event.target.classList.remove('hide')


  // console.log(cardImage)
  // console.log(event.target.firstElementChild)

//   event.target.firstElementChild.classList.remove('hide')
// }





// function selectCard(event) {
//   var selected = event.target
//   var cardHolder = document.querySelector('.card-holder')
//   var image = document.querySelector('.card-image')
//   for (var i = 0; i < )
//   if (selected.classList.contains('card-holder')) {
//     cardHolder.classList.add('negZ')
//     image.classList.add('z2')
//   console.log('CARD')
// } else if (selected.classList.contains('card-image')) {
//   console.log('IMAGE')
//   cardHolder.classList.remove('negZ')
//   image.classList.remove('z2')
//
// }
// }

// function loadImagesToCards() {
//   console.log(select)
//   var select = event.target;
//   for (var i = 0; i < 10; i++) {
//     var currentDiv = document.querySelector('`placeholder-${[i]}`')
//     currentDiv.innerHTML =
//     `'
//       <img class="hide" src=${deck.cards[i].image} />
//
//     '`
//   }
// }



// <img src=${deck.cards[i].image} />





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
