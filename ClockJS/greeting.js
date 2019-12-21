const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings')
const USER_LS = 'currentUser'
//get class name
const SHOWING_CN = 'showing'

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `hello ${text}`
}

function paintNotGreeting() {
  form.classList.add(SHOWING_CN)
  input.classList.add(SHOWING_CN)
}

function askForName() {
function loadName() {
  const currentUser = localStorage.getItem(USER_LS)

  if (currentUser === null) {
    //login no
    paintNotGreeting()
  } else {
    //login ok
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init()
