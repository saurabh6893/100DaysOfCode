const columz = document.querySelectorAll(".panel");

columz.forEach((panel) => {
  panel.addEventListener("click", () => {
    rmactive();
    panel.classList.add("active");
  });
});

function rmactive() {
  columz.forEach((panel) => {
    panel.classList.remove("active");
  });
}
