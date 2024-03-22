let cards = [0, 0];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let imageFiles = [
  { filename: "./images/ace.png", value: 11 },
  { filename: "./images/2.png", value: 2 },
  { filename: "./images/3.png", value: 3 },
  { filename: "./images/4.png", value: 4 },
  { filename: "./images/5.png", value: 5 },
  { filename: "./images/6.png", value: 6 },
  { filename: "./images/7.png", value: 7 },
  { filename: "./images/8.png", value: 8 },
  { filename: "./images/9.png", value: 9 },
  { filename: "./images/10.png", value: 10 },
  { filename: "./images/jack10.png", value: 10 },
  { filename: "./images/queen10.png", value: 10 },
  { filename: "./images/king10.png", value: 10 },
];

let backImg = document.createElement("img");
backImg.src = "./images/back.png";
backImg.alt = "Card";
backImg.value = 0;

function renderGame() {
  cardsEl.innerHTML = "";

  cards.forEach((cardValue, index) => {
    let img = document.createElement("img");
    if (cardValue === 0) {
      img.src = backImg.src;
    } else {
      let image = imageFiles.find((image) => image.value === cardValue);
      img.src = image.filename;
    }
    img.alt = "Card";
    cardsEl.appendChild(img);
  });

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "New card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You Lose!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

renderGame();

function startGame() {
  isAlive = true;
  cards = [getRandomCardValue(), getRandomCardValue(), backImg.value];
  sum = cards[0] + cards[1];
  renderGame();
}

function getRandomCardValue() {
  const randomIndex = Math.floor(Math.random() * imageFiles.length);
  const randomImg = imageFiles[randomIndex];

  return randomImg.value;
}

function newCard() {
  console.log("newCard() called");
  console.log("Before adding new card:", cards);

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCardValue();
    sum += card;

    let index = cards.indexOf(0);

    if (index !== -1) {
      cards.splice(index, 1, card);
    } else {
      cards.push(card);
    }

    renderGame();
    saveGameState();

    console.log("After adding new card:", cards);
  }
}

let player = {
  name: "User",
  chips: 200,
};
playerEl.textContent = player.name + ": $" + player.chips;
