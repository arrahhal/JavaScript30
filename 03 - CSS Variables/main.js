const spaceInput = document.getElementById("spacing");
const blurInput = document.getElementById("blur");
const colorInput = document.getElementById("base");
const body = document.getElementById("body");

spaceInput.addEventListener("change", (e) => {
  const value = e.target.value;
  body.style.setProperty("--img-space", `${value}px`);
});

blurInput.addEventListener("change", (e) => {
  const value = e.target.value;
  body.style.setProperty("--img-blur", `${value}px`);
});

colorInput.addEventListener("change", (e) => {
  const value = e.target.value;
  body.style.setProperty("--color-bg", value);
});
