const hamburgerBtn = document.querySelector('#hamburgerMenu')
const navBar = document.querySelector('#navbar ul')

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('show')
})