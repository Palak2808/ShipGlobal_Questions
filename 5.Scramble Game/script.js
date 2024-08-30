document.addEventListener('DOMContentLoaded', () => {
    const words = [
        { original: 'example', scrambled: 'xepalme' },
        { original: 'scramble', scrambled: 'eabmclrs' },
        { original: 'javascript', scrambled: 'ptijvracsa' },
        { original: 'function', scrambled: 'tnifucno' }
    ];
    
    let currentWord = {};
    let attempts = 0;

    const scrambledWordEl = document.getElementById('scrambled-word');
    const guessInputEl = document.getElementById('guess');
    const submitBtnEl = document.getElementById('submit-btn');
    const feedbackEl = document.getElementById('feedback');
    const attemptsEl = document.getElementById('attempts');
    const newWordBtnEl = document.getElementById('new-word-btn');

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex];
        scrambledWordEl.textContent = currentWord.scrambled;
        guessInputEl.value = '';
        feedbackEl.textContent = '';
    }

    function checkGuess() {
        const guess = guessInputEl.value.trim();
        if (guess.toLowerCase() === currentWord.original.toLowerCase()) {
            feedbackEl.textContent = 'Congratulations! You guessed it right!';
            feedbackEl.style.color = 'green';
        } else {
            feedbackEl.textContent = 'Incorrect guess. Try again!';
            feedbackEl.style.color = 'red';
            attempts++;
            attemptsEl.textContent = `Attempts: ${attempts}`;
        }
    }

    submitBtnEl.addEventListener('click', checkGuess);

    newWordBtnEl.addEventListener('click', () => {
        attempts = 0;
        attemptsEl.textContent = `Attempts: ${attempts}`;
        getRandomWord();
    });

    // Initialize game with the first word
    getRandomWord();
});
