// Get elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// YES button click
yesBtn.addEventListener("click", () => {
  message.textContent = "YAYYY ❤️ Best decision ever!!!";

  // Fire confetti
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
