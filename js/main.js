const apiKey = "b30a62c2e02fa551137c74f4b8aaf486";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// Search Input Box
const searchBox = document.querySelector('.search input');

// Search Button Box
const searchBtn = document.querySelector('.search button');

// Weather Icon
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);

    // Invalid City Name
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    // For WeatherIcon Changing
    if(data.weather[0].main ==  "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main ==  "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main ==  "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if(data.weather[0].main ==  "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main ==  "Mist"){
        weatherIcon.src = "img/mist.png";
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

   

}

function fun()
{
    var city = document.querySelector('.search input').value;
    checkWeather(city);
}
