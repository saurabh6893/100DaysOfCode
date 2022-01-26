let Left = document.querySelector('.A')
let Right = document.querySelector('.B')

const container = document.querySelector('.container')

Left.addEventListener('mousemove', () => {
  remHoverB()
  container.classList.add('hover-A')
})

function remHoverA() {
  container.classList.remove('hover-A')
}
function remHoverB() {
  container.classList.remove('hover-B')
}

Right.addEventListener('mousemove', () => {
  remHoverA()
  container.classList.add('hover-B')
})
