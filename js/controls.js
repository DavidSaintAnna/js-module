export default function Controls({ playBtn, pauseBtn }) {
  function play() {
    playBtn.classList.add("hide");
    pauseBtn.classList.remove("hide");
  }

  function pause() {
    pauseBtn.classList.add("hide");
    playBtn.classList.remove("hide");
  }

  function reset() {
    playBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
  }

  return {
    reset,
    play,
    pause,
  };
}
