const apikey= "39d0f43f420dcadab01ba0d294edffe1";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.querySelector(".searchbox input")
const searchbtn = document.querySelector(".searchbox button")
const weathericon =  document.querySelector(".weather-icon")

async function checkWeather(city){
    const data = await fetch(apiURL + city +'&appid=' + apikey);
    var datat = await data.json();
    if(data.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    console.log(datat)
    document.querySelector(".city").innerHTML = datat.name;
    document.querySelector(".temp").innerHTML = Math.round((datat.main.temp - 273.15)) + "°C";
    document.querySelector(".humidity").innerHTML = datat.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = (datat.wind.speed.toFixed(2)*3.6) + " kmph";

    if(datat.weather[0].main == "Clouds"){
        weathericon.src ="clouds.png";
    }
    else if(datat.weather[0].main == "Clear"){
        weathericon.src ="clear.png";
    }
    else if(datat.weather[0].main == "Rain"){
        weathericon.src ="rain.png";
    }
    else if(datat.weather[0].main == "Drizzle"){
        weathericon.src ="drizzle.png";
    }
    else if(datat.weather[0].main == "Mist"){
        weathericon.src ="mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";}
}

    searchbtn.addEventListener("click", ()=>{
        checkWeather(searchbox.value)
    })
