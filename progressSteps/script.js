const progress = document.getElementById("progress"); // for progress bar
const next = document.getElementById("next"); // for Next
const previous = document.getElementById("prev"); //for Previous
const circles = document.querySelectorAll(".circle"); // for all the number circles

let currentActive = 1;
function Disabler() {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateActive();
  console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  updateActive();
  console.log(currentActive);
});

function updateActive() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else circle.classList.remove("active");
  });

  const activez = document.querySelectorAll(".active");
  progress.style.width =
    ((activez.length - 1) / (circles.length - 1)) * 100 + "%";

  Disabler();
}
