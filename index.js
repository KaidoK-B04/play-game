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
  { filename: "./images/back.png", value: 0 }, // Assuming back.png has no value
];

function displayImages() {
  // Get the container element
  let container = document.getElementById("image-container");

  // Loop through the imageFiles array
  imageFiles.forEach((image) => {
    // Create an img element
    let img = document.createElement("img");

    // Set the src attribute to the filename
    img.src = image.filename;

    // Set the alt attribute to the filename (for accessibility)
    img.alt = image.filename;

    // Set the data-value attribute to the image value
    img.setAttribute("data-value", image.value);

    // Append the img element to the container
    container.appendChild(img);
  });
}

// Call the displayImages function to display the images
displayImages();

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player = {
  name: "User",
  chips: 200,
};
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
