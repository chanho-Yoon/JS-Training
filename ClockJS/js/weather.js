const COORDS = 'coords'
const API_KEY = getWeatherApiKey()
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
}
function handleGeoError(position) {
  console.log('위치를 가져오지 못했습니다.')
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS)
  if (loadedCords === null) {
    askForCoords()
  } else {
    //getWeather
  }
}

function init() {
  loadCoords()
}

init()
