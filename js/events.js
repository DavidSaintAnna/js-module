import {
  playBtn,
  addBtn,
  blueBtn,
  coffeBtn,
  decreaseBtn,
  fireBtn,
  forestBtn,
  pauseBtn,
  stopBtn,
  btnTop,
  btnTopBlack,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

export default function ({ sound, timer, controls, pagemode, changecolor }) {
  playBtn.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  addBtn.addEventListener("click", () => {
    sound.pressButton();
    timer.updateMinutesPlus(
      Number(minutesDisplay.textContent),
      Number(secondsDisplay.textContent)
    );
  });

  pauseBtn.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  stopBtn.addEventListener("click", () => {
    sound.pressButton();
    controls.reset();
    timer.reset();
  });

  blueBtn.addEventListener("click", () => {
    sound.rainAudio.paused ? sound.rainAudio.play() : sound.rainAudio.pause();
    sound.forestAudio.pause();
    sound.coffeAudio.pause();
    sound.fireAudio.pause();
    changecolor.rainChangeColor();
  });

  coffeBtn.addEventListener("click", () => {
    sound.coffeAudio.paused
      ? sound.coffeAudio.play()
      : sound.coffeAudio.pause();
    sound.forestAudio.pause();
    sound.fireAudio.pause();
    sound.rainAudio.pause();
    changecolor.coffeeChangeColor();
  });

  decreaseBtn.addEventListener("click", () => {
    if (Number(minutesDisplay.textContent) <= 5) {
      /*      timer.updateMinutesMinus(5, 0); */
      minutesDisplay.textContent = "00";
      secondsDisplay.textContent = "00";
      return;
    }
    sound.pressButton();
    timer.updateMinutesMinus(
      Number(minutesDisplay.textContent),
      Number(secondsDisplay.textContent)
    );
  });

  fireBtn.addEventListener("click", () => {
    sound.fireAudio.paused ? sound.fireAudio.play() : sound.fireAudio.pause();
    sound.rainAudio.pause();
    sound.coffeAudio.pause();
    sound.forestAudio.pause();
    changecolor.fireChangeColor();
  });

  forestBtn.addEventListener("click", () => {
    sound.forestAudio.paused
      ? sound.forestAudio.play()
      : sound.forestAudio.pause();
    sound.rainAudio.pause();
    sound.coffeAudio.pause();
    sound.fireAudio.pause();
    changecolor.forestChangeColor();
    console.log(forestBtn);
  });

  btnTop.addEventListener("click", () => {
    pagemode.darkMode();
  });

  btnTopBlack.addEventListener("click", () => {
    pagemode.lightMode();
  });
}
