let result = 0;
let randomResult = 0;

const createRandomNumber = () => {
    return Math.floor(Math.random() * 11);
}

const createRandomResult = () => {
    while (true) {
        const tempResult = createRandomNumber() * createRandomNumber();
        if (tempResult !== result) {
            return tempResult;
        }
    }
}

const initSolutions = () => {

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

const displaySolution = () => {
    initSolutions();
    showSolutionGroup();
}
