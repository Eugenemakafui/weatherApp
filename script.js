const apiKey = '79814456b9955b939d6ecac8eb3fe06d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const cityName = document.querySelector('#js-search-input');
const buttonElement = document.querySelector('#js-btn-search');
const getTempElement = document.querySelector('#js-temp');
const getCityElement = document.querySelector('#js-city-name');
const getHumidityElement = document.querySelector('#js-humidity');
const getWindElement = document.querySelector('#js-wind-speed');
const tempTypeElement = document.querySelector('#js-temp-type p');
const tempDescElement = document.querySelector('#js-temp-desc p');
const getImg = document.querySelector('#js-img-container');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    getTempElement.innerHTML = `${data.main.temp}&#8451`;
    getCityElement.innerHTML = data.name;
    getWindElement.innerHTML = `${data.wind.speed}km&#47h`;
    getHumidityElement.innerHTML = `${data.main.humidity}&#37`;
    tempTypeElement.innerHTML = `${data.weather[0].main}`;
    tempDescElement.innerHTML = `${data.weather[0].description}`;

    if(data.weather[0].main === 'Clouds'){
        getImg.innerHTML = ' <img src="images/clouds.png" alt="">';
    }
    else if(data.weather[0].main === 'Clear'){
        getImg.innerHTML = ' <img src="images/clear.png" alt="">';
    }
    else if(data.weather[0].main === 'Drizzle'){
        getImg.innerHTML = ' <img src="images/drizzle.png" alt="">';
    }
    else if(data.weather[0].main === 'Rain'){
        getImg.innerHTML = ' <img src="images/rain.png" alt="">';
    }
    else if(data.weather[0].main === 'Mist'){
        getImg.innerHTML = ' <img src="images/mist.png" alt="">';
    }
    else if(data.weather[0].main === 'Snow'){
        getImg.innerHTML = ' <img src="images/snow.png" alt="">';
    }
}



buttonElement.addEventListener('click', ()=>{
    checkWeather(cityName.value);
    cityName.value='';
})
