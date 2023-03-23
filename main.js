import './style.css'

const menuButton = document.querySelector('#menu')
const menuBar = document.querySelector('[role="menubar"]')

menuButton.addEventListener('click', () => {
  const isExpanded = JSON.parse(menuButton.getAttribute('aria-expanded'))
  menuButton.setAttribute('aria-expanded', !isExpanded)
  menuBar.classList.toggle('hidden')
  menuBar.classList.toggle('flex')

})