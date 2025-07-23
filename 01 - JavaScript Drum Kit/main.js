const keyCodes = Array.from(document.querySelectorAll("div[data-key]")).map(
  (key) => {
    return parseInt(key.dataset.key);
  },
);

document.addEventListener("keydown", (e) => {
  const code = e.keyCode;
  if (keyCodes.includes(code)) {
    const div = document.querySelector(`div[data-key='${code}']`);
    const audio = document.querySelector(`audio[data-key='${code}']`);
    div.classList.add("playing");
    audio.play();
  }
});

document.addEventListener("keyup", (e) => {
  const code = e.keyCode;
  if (keyCodes.includes(code)) {
    const div = document.querySelector(`div[data-key='${code}']`);
    div.classList.remove("playing");
  }
});
