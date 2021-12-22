// bg /loading-text

let theText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let loading = 0;

let int = setInterval(bluring, 100);

function bluring() {
  loading++;
  if (loading > 99) {
    clearInterval(int);
  }

  theText.innerText = `${loading} %`;
  theText.style.opacity = scale(loading, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
