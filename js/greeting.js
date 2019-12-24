const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings'),
  logout = document.querySelector('.js-logout')
const USER_LS = 'currentUser'
//get class name
const SHOWING_CN = 'showing'

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `안녕하세요 ${text} 님`
}

function saveName(text) {
  localStorage.setItem(USER_LS, text)
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = input.value
  paintGreeting(currentValue)
  saveName(currentValue)
}

function askForName() {
  form.classList.add(SHOWING_CN)
  form.addEventListener('submit', handleSubmit)
}
//로그인한 이름이 있는지 없는지 확인
function loadName() {
  const currentUser = localStorage.getItem(USER_LS)

  if (currentUser === null) {
    //login no라면 입력 받을수 있는 input 태그를 볼 수 있도록
    askForName()
  } else {
    //login ok라면 입력 받은 localstorage값을 출력
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init()
