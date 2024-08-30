function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = generateRandomNumber(1, 100);
let attempts = 0;
let maxAttempts = 5;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const chances = document.getElementById('chances');

guessButton.addEventListener('click', function () {
    const userGuess = guessInput.value.trim(); 
    attempts++;

    if (userGuess === '') {
        feedback.textContent = "Input cannot be empty. Please enter a number.";
        attempts--; 
        return;
    }

    if (isNaN(userGuess)) {
        feedback.textContent = "Invalid input. Please enter a number.";
        attempts--; 
        return;
    }

    const guessNumber = parseInt(userGuess, 10);

    if (guessNumber < 1 || guessNumber > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        attempts--;
        return;
    }

    if (guessNumber === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
        guessButton.disabled = true;
    } else if (guessNumber > randomNumber) {
        feedback.textContent = "Your number is high.";
    } else {
        feedback.textContent = "Your number is low.";
    }

    chances.textContent = `You have ${maxAttempts - attempts} Chances`;

    if (attempts >= maxAttempts && guessNumber !== randomNumber) {
        feedback.textContent = `Game over! The correct number was: ${randomNumber}.`;
        guessButton.disabled = true;
    }
});
