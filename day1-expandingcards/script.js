const columz = document.querySelectorAll(".panel"); //selects all panels using document.qsa

columz.forEach((panel) => {
  //a foreach loop for panel
  panel.addEventListener("click", () => {
    //above func listens to clicks and performs a function

    //this belove function removes the active from all the panels explained in the function
    rmactive();

    panel.classList.add("active"); //adds a class named active
  });
});

function rmactive() {
  columz.forEach((panel) => {
    // for loop that revolves through panel
    panel.classList.remove("active"); //removes the class active
  });
}
