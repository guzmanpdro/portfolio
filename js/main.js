const hamburgerBtn = document.querySelector('#hamburgerMenu')
const navBar = document.querySelector('#navbar ul')
const form = document.querySelector('#form')

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('show')
})

form.addEventListener('submit', validationForm)

function validationForm(event) {
  event.preventDefault()
  const name = document.querySelector('#name').value

  alert(`Hola mi pana ${name}, a día de hoy el formulario no está funcionando, lo lamento, gracias por interesarte en comunicarte conmigo.`)
}