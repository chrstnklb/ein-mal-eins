let factorOne = 0;
let factorTwo = 0;


const handleQuestion = () => {
    initQuestion();
    displayQuestion();
    showQuestion();
}

const initQuestion = () => {
    factorOne = createRandomNumber();
    factorTwo = createRandomNumber();
}

const displayQuestion = () => {
    initQuestion();
    setQuestionText(`${factorOne} x ${factorTwo}`);
}