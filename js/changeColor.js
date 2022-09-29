export default function ChangeColor({ forestBtn, coffeBtn, fireBtn, blueBtn }) {
  function forestChangeColor() {
    forestBtn.classList.toggle("change-colors");
    blueBtn.classList.remove("change-colors");
    coffeBtn.classList.remove("change-colors");
    fireBtn.classList.remove("change-colors");
  }

  function rainChangeColor() {
    blueBtn.classList.toggle("change-colors");
    forestBtn.classList.remove("change-colors");
    coffeBtn.classList.remove("change-colors");
    fireBtn.classList.remove("change-colors");
  }

  function coffeeChangeColor() {
    coffeBtn.classList.toggle("change-colors");
    forestBtn.classList.remove("change-colors");
    blueBtn.classList.remove("change-colors");
    fireBtn.classList.remove("change-colors");
  }

  function fireChangeColor() {
    fireBtn.classList.toggle("change-colors");
    forestBtn.classList.remove("change-colors");
    blueBtn.classList.remove("change-colors");
    coffeBtn.classList.remove("change-colors");
  }
  return {
    forestChangeColor,
    rainChangeColor,
    coffeeChangeColor,
    fireChangeColor,
  };
}
