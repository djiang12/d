const APIKEY ="ec553879532ae3009d6d6ea8f5c92452";
let lat = 42.361145
let lon = -71.057083
const UNITS = "imperial"
var WEATHERURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${APIKEY}`;


function loadWeather() {
    lat = document.getElementById("lat").value
    lon = document.getElementById("lon").value
    var WEATHERURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${APIKEY}`;
    var xhttp = new XMLHttpRequest();
   
   
    xhttp.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            alert(`payload bad (code ${this.status})`);
            return;
        }
        document.getElementById("jsontext").innerHTML = this.responseText;
        displayWeather(JSON.parse(this.responseText));
    }
    xhttp.open("GET", WEATHERURL, true);
    xhttp.send();
}


function displayWeather(json) {
    document.getElementById("location").innerHTML = `${json.name}, ${json.sys.country}` ;
    // document.getElementById("condition").innerHTML = json.weather[0].main;
    document.getElementById("jsontext").innerHTML = `Current Temperature: ${json.main.temp} F <br> <br> Current Wind Speed: ${json.wind.speed} mph <br> <br> Current Humidity: ${json.main.humidity}
    <br> <br> Highest Temperature: ${json.main.temp_max} F <br> <br> Lowest Temperature: ${json.main.temp_min} F` ;
   




}
