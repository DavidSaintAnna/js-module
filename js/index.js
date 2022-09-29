import {
  playBtn,
  addBtn,
  blueBtn,
  coffeBtn,
  decreaseBtn,
  fireBtn,
  forestBtn,
  pauseBtn,
  minutesDisplay,
  secondsDisplay,
  btnTop,
  btnTopBlack,
  stopBtn,
} from "./elements.js";

import Controls from "./controls.js";

import Timer from "./timer.js";

import events from "./events.js";

import Sound from "./sound.js";

import PageMode from "./pageMode.js";

import ChangeColor from "./changeColor.js";

const changecolor = ChangeColor({ forestBtn, coffeBtn, fireBtn, blueBtn });

const pagemode = PageMode({ btnTop, btnTopBlack });

const controls = Controls({
  playBtn,
  pauseBtn,
});

const sound = Sound();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

events({ sound, controls, timer, pagemode, changecolor });
