let actualRound = 0;

const initProgress = () => {
    actualRound = 1;
}

const setProgress = () => {
    setProgressText(`Round ${actualRound} from ${ROUNDS}!`) 
    showProgress();
}

const displayProgress = () => {
    initProgress();
    setProgress();
}