export default function PageMode({ btnTop, btnTopBlack }) {
  function darkMode() {
    document.body.classList.add("dark");
    btnTop.classList.add("hide");
    btnTopBlack.classList.remove("hide");
  }
  function lightMode() {
    document.body.classList.remove("dark");
    btnTopBlack.classList.add("hide");
    btnTop.classList.remove("hide");
  }

  return {
    darkMode,
    lightMode,
  };
}
