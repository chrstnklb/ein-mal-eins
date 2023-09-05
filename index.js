const ROUNDS = 10;

const endRoundWithSolutionOne = () => { endRound(1); }
const endRoundWithSolutionTwo = () => { endRound(2); }
const endRoundWithSolutionThree = () => { endRound(3); }

function loadLandingPage() {
    
    initEventListeners();

    hideEndGameButton();
    hideProgress();
    hideScore();
    hideTime();
    showStartGameButton();
}

function startGame() {
    
    startWatch();
    resetScore();
    handleQuestion();
    
    hideStartGameButton();
    displayProgress();
    displaySolution();
}

function endRound(resultId) {

    evaluateAnswer(resultId);
    refreshRound();
    setProgress();
    initSolutions();

    displayQuestion();
    displaySolution();

    if (actualRound > 10) endGame();

}

const endGame = () => {

    stopWatch();

    hideProgress();
    hideQuestion();
    hideSolutionGroup();

    displayScore();
    displayTime();
    displayEndGameButton();
    navigator.vibrate(500);
}

const displayEndGameButton = () => {
    showEndGameButton();
}

const refreshRound = () => { ++actualRound; }