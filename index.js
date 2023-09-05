let result = 0;
let randomResult = 0;
let score = 0;
let userHasClicked = true;
let factorOne = 0;
let factorTwo = 0;
let round = 0;
let elapsedSeconds = 0;
let startTime = 0;

const progressElement = document.getElementById('progress');
const startGameElement = document.getElementById('start-game');
const endGameElement = document.getElementById('end-game');
const questionElement = document.getElementById('question');
const timeElement = document.getElementById('time');

const resultOneElement = document.getElementById('result-one');
const resultTwoElement = document.getElementById('result-two');
const resultThreeElement = document.getElementById('result-three');


function initEventListeners() {
    startGameElement.addEventListener('click', function () {
        startGame();
    });
    endGameElement.addEventListener('click', function () { loadLandingPage(); });
    resultOneElement.addEventListener('click', function () { evaluateAndScore(1); });
    resultTwoElement.addEventListener('click', function () { evaluateAndScore(2); });
    resultThreeElement.addEventListener('click', function () { evaluateAndScore(3); });
}

function addResultToDom(resultId, result) {
    const resultElement = document.getElementById(resultId);
    resultElement.textContent = result;
}

function setProgress(progress) {
    const progressElement = document.getElementById('progress');
    progressElement.textContent = progress;
}

function createRandomNumber() {
    return Math.floor(Math.random() * 11);
}


function createRandomResult() {
    while (true) {
        const tempResult = createRandomNumber() * createRandomNumber();
        if (tempResult !== result) {
            return tempResult;
        }
    }
}

function evaluateAndScore(resultId) {

    evaluateAnswer(resultId);

    setProgress(`Round ${round} of 10`);

    initQuestion();
    setQuestion();

    initRandomResult();
    showResultGroup();

    round++;

    if (round > 10) {
        stopWatch();

        initElapsedTime();
        showElapsedTime();
        setProgress(`You scored ${score} out of 10`);
        
        hideQuestion();
        hideResultGroup();
        showEndGameButton();
    }

}

function initElapsedTime() {
    timeElement.textContent = `Zeit: ${elapsedSeconds} Sekunden`;
    timeElement.style.display = 'block';
}

function showElapsedTime() {
    timeElement.style.display = 'block';
}

function showEndGameButton() {
    endGameElement.style.display = 'block';
}

function evaluateAnswer(resultId) {
    if (resultId === randomResult) {
        score++;
    }
}


function loadLandingPage() {

    initEventListeners();

    showStartGameButton();
    hideEndGameButton();
    hideProgress();
    hideQuestion();
    hideResultGroup();
    hideTime();
}

function hideTime() { timeElement.style.display = 'none'; }

function hideEndGameButton() { endGameElement.style.display = 'none'; }

function hideProgress() { progressElement.style.display = 'none'; }

function showStartGameButton() { startGameElement.style.display = 'block'; }

function hideQuestion() { questionElement.style.display = 'none'; }

function hideResultGroup() {
    resultOneElement.style.display = 'none';
    resultTwoElement.style.display = 'none';
    resultThreeElement.style.display = 'none';
}

function startGame() {
    startStopWatch();
    hideStartGameButton();
    resetScore();

    initProgress();
    setProgress(`Round ${round} of 10`);
    showProgress();

    initQuestion();
    setQuestion();
    showQuestion();

    initRandomResult();
    showResultGroup();
}

function startStopWatch() {
    startTime = Date.now();
}

function stopWatch() {
    let end = Date.now();
    let elapsed = end - startTime;
    elapsedSeconds = elapsed / 1000;
}

function hideStartGameButton() { startGameElement.style.display = 'none'; }

function initProgress() { round++; }

function showProgress() { progressElement.style.display = 'block'; }

function initQuestion() {
    factorOne = createRandomNumber();
    factorTwo = createRandomNumber();
}

function setQuestion() { questionElement.textContent = `${factorOne} x ${factorTwo}`; }

function showQuestion() { questionElement.style.display = 'block'; }

function showResultGroup() {
    resultOneElement.style.display = 'block';
    resultTwoElement.style.display = 'block';
    resultThreeElement.style.display = 'block';
}

function resetScore() { score = 0; }

function initRandomResult() {

    result = factorOne * factorTwo;

    // get random number 1, 2 or 3
    randomResult = Math.floor(Math.random() * 3) + 1;
    if (randomResult === 1) {
        addResultToDom('result-one', result);
        addResultToDom('result-two', createRandomResult());
        addResultToDom('result-three', createRandomResult());
    } else if (randomResult === 2) {
        addResultToDom('result-one', createRandomResult());
        addResultToDom('result-two', result);
        addResultToDom('result-three', createRandomResult());
    } else {
        addResultToDom('result-one', createRandomResult());
        addResultToDom('result-two', createRandomResult());
        addResultToDom('result-three', result);
    }
}

// setProgress(`Round ${i + 1} of ${rounds}`);

// console.log(`score: ${score} out of ${rounds} rounds`);



// setProgress(`You scored ${score} out of ${rounds}`);


// }
