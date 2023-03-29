function getWeather(){
    console.log("function");
     
    let cityName = document.querySelector("#weather").value;  // text fron input value stored into cityName
    console.log(cityName);

    const weatherDetails = async ()=>{
        let report = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
        var jsonReport = await report.json();
        displayWeatherDetails(jsonReport)

    }
     weatherDetails();

    
 }

    function displayWeatherDetails(cityData){
        console.log(cityData);  //  details of citydata print in console .by using that we find what are 
                                // all the data present in that city. then take that and assigned to variable.below eg shows that.
       // let cityName = 

        let html_Data ='';

       let cityname=cityData.name;
       let temperature=cityData.main.temp;
       let mintemperature=cityData.main.temp_min;
       let maxtemperature=cityData.main.temp_max;
       let cityWeatherType = cityData.weather[0].main;
       let wind=cityData.wind.speed;
       let timeZone=cityData.timeZone;

       //<h2>city name: ${cityname}</h2>
    //    <h2>Temperature : ${temperature} </h2>
    //    <h2>mintemperature : ${mintemperature} </h2>
    //    <h2>max_temperature :${maxtemperature}</h2>
    //    <h2>city_weather : ${cityWeatherType}</h2>
    //    <h2>wind_type : ${wind}</h2>
    //    <h2>time_zone : ${timeZone}</h2>



       html_Data = `<div>

      

       <div class="d-flex">
       <h6 class="flex-grow-1">${cityname}</h6>
       <h6>Time zone</h6>
   </div>
   
   <div class="d-flex flex-column text-center mt-5 mb-4">
       <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${temperature}°C </h6>
       <span class="small" style="color: #868B94">${cityWeatherType}</span>
   </div>
   <div class="d-flex align-items-center">
       <div class="flex-grow-1" style="font-size: 1rem;">
           <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span
                   class="ms-1">
                   ${wind} km/h </span></div>
   <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span
                   class="ms-1">
                   Min Temp: ${mintemperature}  </span></div>
   <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span
                   class="ms-1">
                   Max Temp: ${maxtemperature}</span></div>
       </div>
   <div>
           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
               width="100px">
       </div>
   </div>`


        document.querySelector("#cityWeather").innerHTML = html_Data;

    }
