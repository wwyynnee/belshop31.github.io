let i = 0;
let j = 7;
const images = document.querySelectorAll(".img1 img");
const dots = document.querySelectorAll(".navbtn button");
console.log(dots);

function right() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}

function left() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}

function sli(num) {
  images.forEach(function(image) {
    image.classList.remove("active");
  });
  document.getElementById("content" + num).classList.add("active");
  i = num - 1;
  indicator(num);
}
function indicator(num) {
  dots.forEach(function(sli) {
    sli.style.backgroundColor = "transparent";
  });
  document.querySelector(
    ".navbtn button:nth-child(" + num + ")"
  ).style.backgroundColor = "white";
}

setInterval(right, 6000);