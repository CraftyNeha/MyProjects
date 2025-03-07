async function getWeather(){

    let city = document.getElementById('city').value;
    
    if(!city){
        alert('Please Enter a City name');
        return;
    }
    let apiKey ='98f2727bbe90c899c768a87be6248c46';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98f2727bbe90c899c768a87be6248c46&units=metric`;//added &units=metric to convert the temp to celcius

    try{

        let response = await fetch(url);
        let data = await response.json();

        if(data.cod !== 200){//200 is for successfull  404 is for error
            throw new Error(data.message);
        }

        document.getElementById('results').innerHTML=`<h2 >${data.name}</h2>

        <h3>${data.main.temp}°c🌡️</h3>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>`
    }
    catch(error){
        document.getElementById('results').innerHTML=`<p class=text-danger> Error: ${error.message}</p>`;
    }
}

function search(){
    document.getElementById("city").focus();
}

async function suggestionOfCity(query){
    query
}