const API_KEY = "e496e5e86224276264d89dbefcee9605";
const COORDS = 'coords';


function getWeather(lat,lng) {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`)     //fetch로 데이터 손쉽게 가져옴
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}


function handleGeoSuccess(position) {
    // console.log(position)       //postion.coords.latitude
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude
        //위의 처럼 객체이름을 같게 만들때에는
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}
function handleGeoError() {
    console.log("cant access geo location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}


function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    }else {
        // getWeather
    }
}

function init() {

}
init();