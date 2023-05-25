const slides = document.querySelectorAll(".slider__photo");
const sliderBtn = document.querySelector(".slider");
const slider = [];
let step = 0;
let offset = 0;

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}
console.log(slider)
function draw() {
  const img = document.createElement("img");
  img.src = slider[step];
  img.classList.add("slider__photo");
  img.style.left = offset * 600 + "px";
  document.querySelector(".slider").appendChild(img);
 
  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left() {
  let slides2 = document.querySelectorAll(".slider__photo");
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * 600 - 600 + "px";
    offset2++;
  }
  setTimeout(function () {
    slides2[0].remove();
    draw();
  }, 1000);
}

setInterval(function () {
  left();
}, 4000);

draw();
draw();

