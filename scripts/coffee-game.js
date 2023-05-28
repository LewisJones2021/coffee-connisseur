/** @format */

const gamesContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const pictures = document.querySelectorAll('.images');
const startButton = document.getElementById('start-game');
const controls = document.querySelector('.controls-container');
const stopButton = document.getElementById('stop-button');
const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('timer');
let cards;
let interval;
let firstCard = false;
let secondCard = true;
// images array
const images = [
 { name: 'coffeeOne', image: './images/recipes-images/flat white.webp' },
 { name: 'coffeeThree', image: './images/recipes-images/americano.jpeg' },
 { name: 'coffeeFour', image: './images/recipes-images/latte.jpeg' },
 { name: 'coffeeTwo', image: './images/recipes-images/cappuchino.jpeg' },
 { name: 'coffeeFive', image: './images/recipes-images/americano.jpeg' },
 { name: 'coffeeSix', image: './images/recipes-images/flat white.webp' },
];

// starting time
let seconds = 0,
 minutes = 0;

// starting moves and winning count
let numberOfMoves = 0,
 winningCount = 0;

// function for timer
const timerGenerator = () => {
 seconds += 1;
 //logic for the minutes
 if (seconds >= 60) {
  minutes += 1;
  seconds = 0;
 }
 // format the time before displaying
 let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
 let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
 timeValue.innerHTML = `<span> Time: </span> ${minutesValue}:${secondsValue}`;
};

// function to calculate the number of moves
const numberOfMovesCounter = () => {
 numberOfMoves += 1;
 moves.innerHTML = `<span>Moves:  </span>${numberOfMoves}`;
};

// function to pick random objects from the pictures array
const randomObjectGenerator = (numberOfPairs = 4) => {
 //temporay array
 let tempArray = [...images];
 //initialize card value array
 let cardValues = [...tempArray];

 numberOfPairs = (numberOfPairs * numberOfPairs) / 2;

 //randomObjectSelection
 for (let i = 0; i < numberOfPairs; i++) {
  const randomNumber = Math.floor(Math.random() * tempArray.length);
  cardValues.push(tempArray[randomNumber]);
  //once object is selected, remove from temp array
  tempArray.splice(randomNumber, 1);
 }
 return cardValues;
};

// creating the cards section
const matrixGenerator = (cardValues, numberOfPairs = 4) => {
 gamesContainer.innerHTML = '';
 cardValues = [...cardValues, ...cardValues];
 // card shuffle
 cardValues.sort(() => Math.random() - 0.5);
 for (let i = 0; i < numberOfPairs * numberOfPairs; i++) {
  //data-card-values is a custom attribute which stores the names of the cards to match later

  // before the card is flipped
  // after the card is flipped
  gamesContainer.innerHTML += `
<div class="card-container" data-card-value="${cardValues[i].name}">
 <div class="card-before">?</div>
 <div class="card-after">
  <img src="${cardValues[i].image}" class="image"/></div>
  </div>
 `;
 }
 // create a grid layout with a specified number of columns (numberOfPairs), where each column is automatically sized.
 gamesContainer.style.gridTemplate = `repeat(${numberOfPairs},auto)`;

 // cards
 cards = document.querySelectorAll('.card-container');

 cards.forEach((card) => {
  card.addEventListener('click', () => {
   // if selected card is not matched, run code below
   if (!card.classList.contains('matched')) {
    // flip the clicked card
    card.classList.add('flipped');

    // check to see if the clicked card is the first card selceted in a matching pair
    if (!firstCard) {
     firstCard = card;

     // the current card value becomes the first value

     firstCardValue = card.getAttribute('data-card-value');
    } else {
     // increment number of moves
     numberOfMovesCounter();

     //  second card and the value
     secondCard = card;
     let secondCardValue = card.getAttribute('data-card-value');
     if (firstCardValue == secondCardValue) {
      // if both cards match add matched class so these cards would beignored next time
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      // set the first card to false as the next card would now be frist
      firstCard = false;
      // winingCount increments
      winningCount += 1;
      // check if the winning count == half of the cards values
      if (winningCount == Math.floor(cardValues.length / 2)) {
       result.innerHTML = `<h2>You won!</h2> <h4>Moves: ${numberOfMoves} </h4>`;
       stopGame();
      }
     } else {
      // if the cards don't match, flip them back to normal
      let [tempFirst, tempSecond] = [firstCard, secondCard];
      firstCard = false;
      secondCard = false;
      // set a delay
      let delay = setTimeout(() => {
       tempFirst.classList.remove('flipped');
       tempSecond.classList.remove('flipped');
      }, 900);
     }
    }
   }
  });
 });
};

// start the game
startButton.addEventListener('click', () => {
 numberOfMoves = 0;
 seconds = 0;
 minutes = 0;
 // game controls and buttons visibilty
 controls.classList.add('hide');
 stopButton.classList.remove('hide');
 startButton.classList.add('hide');

 // start the timer
 interval = setInterval(timerGenerator, 1000);
 // initial moves
 moves.innerHTML = `<span>Moves:</span> ${numberOfMoves}`;
 initalizer();
});

// stop the game

stopButton.addEventListener('click', () => {
 controls.classList.remove('hide');
 stopButton.classList.add('hide');
 startButton.classList.remove('hide');
 clearInterval(interval);
});

// initialize values and function calls (starting point)
const initalizer = () => {
 result.innerHTML = '';
 winningCount = 0;
 let cardValues = randomObjectGenerator();

 matrixGenerator(cardValues);
};
