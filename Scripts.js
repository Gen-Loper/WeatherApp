
        const apikey = "e24fbeecfeab5ed11d56bbe27744e7e6";
        //https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=e24fbeecfeab5ed11d56bbe27744e7e6
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        async function checkWeather(city){
            const response = await fetch(apiUrl + city +`&appid=${apikey}`+`&units=metric`);
           
            if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }

        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        }
            
    }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });