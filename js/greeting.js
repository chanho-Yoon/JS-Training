const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings')

//로그인 했을 시에 form과 title , list가 보여지도록 하기 위한 변수
const toDoFormShow = document.querySelector('.js-toDoForm'),
  toDoListShow = document.querySelector('.js-toDoList'),
  toDoTitleShow = document.querySelector('.toDoTitle')
const USER_LS = 'currentUser'
//get class name
const SHOWING_CN = 'showing'
const SHOWING_TODO = 'showing-toDo'

function paintGreeting(text) {
  const span = document.createElement('span')
  const logoutBtn = document.createElement('button')
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  span.innerText = `안녕하세요 ${text} 님`
  logoutBtn.innerText = '❌'
  logoutBtn.addEventListener('click', userLogout)
  greeting.append(span)
  greeting.appendChild(logoutBtn)
  //로그인 했을 시 보이도록
  toDoFormShow.classList.add(SHOWING_CN)
  toDoTitleShow.classList.add(SHOWING_CN)
  toDoListShow.classList.add(SHOWING_TODO)
}

function saveName(text) {
  localStorage.setItem(USER_LS, text)
}
//지웠을 때 다시 일부 메뉴 안보이도록
function removeuser() {
  localStorage.removeItem(USER_LS)
  greeting.classList.remove(SHOWING_CN)
  toDoFormShow.classList.remove(SHOWING_CN)
  toDoTitleShow.classList.remove(SHOWING_CN)
  toDoListShow.classList.remove(SHOWING_TODO)
  form.classList.add(SHOWING_CN)
  input.value = ''
}
//currentUser 삭제 함수
function userLogout(event) {
  const span = document.querySelector('span')
  const button = document.querySelector('button')
  greeting.removeChild(span)
  greeting.removeChild(button)
  removeuser()
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
