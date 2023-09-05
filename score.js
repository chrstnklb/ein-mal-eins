let score = 0;

const resetScore = () => {
    score = 0;
}

const evaluateAnswer = (resultId) => { if (resultId === randomResult) score++; }

const displayScore = () => {
    setScoreText(`You scored ${score} out of 10`);
    showScore();
}
