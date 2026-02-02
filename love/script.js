// Play Music
function playMusic() {
  document.getElementById("bgm").play();
}

// Typing Effect
const text = "Hi Mammam ❤️";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Slideshow
const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);

// No button escape
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

// Yes button
document.getElementById("yes").onclick = () => {
  alert("I LOVE YOU MAMMAM ❤️❤️❤️");
};

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.bottom = "0";
  heart.style.fontSize = "20px";
  heart.style.animation = "float 4s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 300);

// Heart animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-800px);
    opacity: 0;
  }
}`;
document.head.appendChild(style);