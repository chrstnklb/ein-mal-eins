/** Event Listener */

const initEventListeners = () => {
    loadAllElements();

    initEventListenerOnClick(startGameElement, startGame);
    initEventListenerOnClick(endGameElement, loadLandingPage);

    initEventListenerOnClick(resultOneElement, endRoundWithSolutionOne);
    initEventListenerOnClick(resultTwoElement, endRoundWithSolutionTwo);
    initEventListenerOnClick(resultThreeElement, endRoundWithSolutionThree);
}

const initEventListenerOnClick = (element, func) => {
    element.addEventListener('click', func);
}

/** Set texts */

const addResultToDom = (resultId, result) => {
    const resultElement = document.getElementById(resultId);
    resultElement.textContent = result;
}

const setScoreText = (text) => { setElementText(scoreElement, text); }
const setTimeText = (text) => { setElementText(timeElement, text); }
const setProgressText = (text) => { setElementText(progressElement, text); }
const setQuestionText = (text) => { setElementText(questionElement, text); }

const setElementText = (element, text) => { element.textContent = text; }
/** Show and hide elements! */

const showSolutionGroup = () => {
    showSolutionOne();
    showSolutionTwo();
    showSolutionThree();
}

const hideSolutionGroup = () => {
    hideSolutionOne();
    hideSolutionTwo();
    hideSolutionThree();
}

const showElapsedTime = () => { showElement(timeElement); }
const showEndGameButton = () => { showElement(endGameElement); }
const showProgress = () => { showElement(progressElement); }
const showQuestion = () => { showElement(questionElement) };
const showScore = () => { showElement(scoreElement); }
const showSolutionOne = () => { showElement(resultOneElement) };
const showSolutionTwo = () => { showElement(resultTwoElement) };
const showSolutionThree = () => { showElement(resultThreeElement) };
const showStartGameButton = () => { showElement(startGameElement); };

const hideEndGameButton = () => { hideElement(endGameElement); };
const hideProgress = () => { hideElement(progressElement); };
const hideQuestion = () => { hideElement(questionElement); };
const hideScore = () => { hideElement(scoreElement); };
const hideSolutionOne = () => { hideElement(resultOneElement) };
const hideSolutionTwo = () => { hideElement(resultTwoElement) };
const hideSolutionThree = () => { hideElement(resultThreeElement) };
const hideStartGameButton = () => { hideElement(startGameElement); };
const hideTime = () => { hideElement(timeElement); };

const showElement = (element) => { element.style.display = 'block'; }
const hideElement = (element) => { element.style.display = 'none'; }