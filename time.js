let start = 0;
let end = 0;
let elapsed = 0;
let elapsedSeconds = 0;

const startWatch = () => {
    startTime = Date.now();
}

const stopWatch = () => {
    end = Date.now();
    elapsed = end - startTime;
    elapsedSeconds = elapsed / 1000;
}

const displayTime = () => {
    setTimeText(`Zeit: ${elapsedSeconds} Sekunden`);
    showElapsedTime();
}