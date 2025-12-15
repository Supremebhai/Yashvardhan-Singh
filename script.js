function startTimer(duration, display) {
  let timer = duration;
  setInterval(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) timer = duration;
  }, 1000);
}

window.onload = () => {
  startTimer(59, document.getElementById("timer"));
};
