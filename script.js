const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

checkButton.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    checkButton.disabled = true;
    guessInput.disabled = true;
  } else if (userGuess < secretNumber) {
    message.textContent = "Try a higher number.";
  } else {
    message.textContent = "Try a lower number.";
  }
}
