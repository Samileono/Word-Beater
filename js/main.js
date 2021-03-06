window.addEventListener("load", init);

// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

// initialize Game
function init() {
// load word from array
showWord(words);
// start matching on word input
wordInput.addEventListener("input", startMatch);
// Call countdown every second
setInterval(countdown, 1000);
// check game status
setInterval(checkStatus,50);
}

// Start match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    // If score is -ve 1 display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    }else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!";
        return true;
    }
    else {
        message.innerHTML = "";
        return false;
    }
}

// pick and show random word
function showWord(words) {
    // Generate random array index
    let randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
} 

// Countdown timer
function countdown() {
    // Make sure time is not defined
    if(time > 0) 
        time--;
    else if(time === 0) 
        // Game is over
        isPlaying = false;
    
    // Time Display
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over!!!";
        score=-1;
    }

}


  