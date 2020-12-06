const apiKey = "ff536814f739032ced35bed6a9fa4a15"

requestCoords();

function requestCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
}

function handleGeoSucc(position) {
    /* Success Handle */
    const latitude = position.coords.latitude;  // 경도  
    const longitude = position.coords.longitude;  // 위도
    const coordsObj = {
        latitude,
        longitude
    }
    //saveCoords(coordsObj);
    getWeather(latitude, longitude);
 }
 
 function handleGeoErr() {
    /* Error Handle */
    console.log("geo err! " + err);
 }
 
 async function getWeather(latitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        const temp = Math.round(data.main.temp);
        
        const weathers = data.weather[data.weather.length -1];
        const weatherSpan = `${temp}\xB0C ${weathers.main}`;
        
        const newIcon = document.createElement("img");
        if(weathers.main == 'Sunny'){
            newIcon.src = './sun-day-weather-symbol_icon-icons.com_73146.png';
        }else if(weathers.main == 'Cloudy' || weathers.main == 'Haze'){
            newIcon.src = './cloud_icon-icons.com_54315.png';
        }else{
            newIcon.src = './rain-cloud_icon-icons.com_54268.png';
        }

        const newSpan = document.createElement("h1");
        newSpan.innerText = weatherSpan;

        const weatherDiv = document.querySelector("#weatherDiv");
        weatherDiv.appendChild(newSpan);

        const weatherPic = document.querySelector("#weatherPic");
        weatherPic.appendChild(newIcon);
        
        //weatherIcon.src = 
        //weatherSpan.innerHTML = 
    })
 }