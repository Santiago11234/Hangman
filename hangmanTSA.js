
//i didnt think this would be so complex

var words = ["design", "coding", "cybersecurity", "computer", "science", "data", "technology", "digital",
"video", "dragster", "engineering", "robotics", "scivis", "cad", "software", "hardware", "system", "robotics", "videogame",
"webmaster", "website",

"moneel", "lakshay", "tyler", "ausmit", "hazem", "ebaad", "edward", "khoa", "trinity", "santiago"]

let answer = "";
let maxWrong = "4";
let mistakes = "0";
let guessed = [];
let wordStatus = null;

function pickWord(){
    answer = words[Math.floor(Math.random() * words.length)];
}

//I did this to make it quicker than copying a button 26 times but it actually took longer lmfao
function generateKeyboard(){
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
    `
    <button class="btn btn-sm btn-warning mt-2 mx-1" id='` + letter + `' onclick=handleGuess('` + letter + `')>
        `+ letter +`
    </button>
    `).join('');
        
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        updateHangmanImg();
        checkIfGameLost();
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateHangmanImg(){
    if(mistakes == 1){
        document.getElementById('hangmanImg1').src = localStorage.getItem('sec' + mistakes);
    } else if (mistakes == 2){
        document.getElementById('hangmanImg2').src = localStorage.getItem('sec' + mistakes);
    } else if (mistakes == 3){
        document.getElementById('hangmanImg3').src = localStorage.getItem('sec' + mistakes);
    }else if (mistakes == 4){
        document.getElementById('hangmanImg4').src = localStorage.getItem('sec' + mistakes);
    }
}

function checkIfGameWon() {
    if (wordStatus == answer) {
        document.getElementById('keyboard').innerHTML = '<p>You Won!!</p>';

      
    }
}
  
function checkIfGameLost() {
    if (mistakes == maxWrong){
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = '<p>You Lost!</p>';
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
    alert(answer);
}
  
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanImg1').src = '';
    document.getElementById('hangmanImg2').src = '';
    document.getElementById('hangmanImg3').src = '';
    document.getElementById('hangmanImg4').src = '';
    
    updateMistakes();
    pickWord();
    guessedWord();
    generateKeyboard();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

pickWord();
generateKeyboard();
guessedWord();