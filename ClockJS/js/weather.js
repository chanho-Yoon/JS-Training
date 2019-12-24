const weather = document.querySelector('.js-weather')

const COORDS = 'coords'
const API_KEY = getWeatherApiKey()
function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
      //Response안에 있는 내용 가져옴
      return response.json()
    })
    .then(function(json) {
      //json 준비가 되면
      const temperature = json.main.temp
      const place = json.name
      weather.innerText = `${temperature}℃ - ${place}`
    })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}
function handleGeoError(position) {
  console.log('위치를 가져오지 못했습니다.')
}
function askForCoords() {
  //지역 위치정보에 대해 가져옴 성공시 succes 실패시 error 실행
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null) {
    askForCoords()
  } else {
    //getWeather
    const parseCoords = JSON.parse(loadedCoords)
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()
