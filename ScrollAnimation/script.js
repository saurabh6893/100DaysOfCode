const allBoxes = document.querySelectorAll('.box')
const name = document.querySelector('.name')

window.addEventListener('scroll', runScroller)
box.addEventListener('scroll', boxScroller)

function runScroller() {
  const low = (window.innerHeight / 6) * 2

  allBoxes.forEach((box) => {
    const boxContent = box.getBoundingClientRect().top

    if (boxContent < low) {
      box.classList.add('visible')
    } else {
      box.classList.remove('visible')
    }
  })
}
