import {
  fireVolume,
  rainVolume,
  forestVolume,
  coffeeVolume,
} from "./elements.js";

export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const forestAudio = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Floresta.wav?raw=true"
  );
  const rainAudio = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Chuva.wav?raw=true"
  );

  const fireAudio = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Lareira.wav?raw=true"
  );

  const coffeAudio = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Cafeteria.wav?raw=true"
  );

  const timeOver = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  forestAudio.loop = true;
  rainAudio.loop = true;
  fireAudio.loop = true;
  coffeAudio.loop = true;

  forestVolume.oninput = () => {
    forestAudio.volume = forestVolume.value / 100;
  };

  rainVolume.oninput = () => {
    rainAudio.volume = rainVolume.value / 100;
  };

  coffeeVolume.oninput = () => {
    coffeAudio.volume = coffeeVolume.value / 100;
  };

  fireVolume.oninput = () => {
    fireAudio.volume = fireVolume.value / 100;
  };

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    timeOver.play();
  }

  return {
    forestAudio,
    rainAudio,
    fireAudio,
    coffeAudio,
    pressButton,
    timeEnd,
  };
}
