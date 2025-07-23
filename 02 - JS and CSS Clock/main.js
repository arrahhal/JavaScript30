const hourHand = document.querySelector("div.hour-hand");
const secondHand = document.querySelector("div.second-hand");
const minuteHand = document.querySelector("div.min-hand");

function updateUI() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  hourHand.style.transform = `rotate(${(hours / 24) * 360 + 90}deg)`;
  minuteHand.style.transform = `rotate(${(minutes / 60) * 360 + 90}deg)`;
  secondHand.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
}

setInterval(updateUI, 1000);
