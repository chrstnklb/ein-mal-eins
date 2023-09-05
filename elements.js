
let endGameElement = undefined;

let progressElement = undefined;

let questionElement = undefined;

let resultOneElement = undefined;
let resultTwoElement = undefined;
let resultThreeElement = undefined;

let scoreElement = undefined;
let startGameElement = undefined;

let timeElement = undefined;

const loadAllElements = () => {

    endGameElement = document.getElementById('end-game');
    
    progressElement = document.getElementById('progress');
    
    questionElement = document.getElementById('question');

    resultOneElement = document.getElementById('result-one');
    resultTwoElement = document.getElementById('result-two');
    resultThreeElement = document.getElementById('result-three');
    
    scoreElement = document.getElementById('score');
    startGameElement = document.getElementById('start-game');
    
    timeElement = document.getElementById('time');
}