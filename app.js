$(".loadingGif").hide();
$(".jumbotron").hide();

function getWeather(data){
    event.preventDefault();
    const key = "&APPID=57841f1f3af1767042ead8873a280b61";
    const city = document.getElementById("inputCity").value;
    var link = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const url = link + city + key;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        beforeSend: function(){
            $(".loadingGif").show();
            $(".jumbotron").hide();
        },
        complete: function(){
        },
        error: function(){
            $(".loadingGif").hide();
            alert("There is no such city. Please try again!")
        },
        success: function(data){
            $(".loadingGif").hide();
            $(".jumbotron").show();
            console.log(data.city, data.list[0]);
            $(".cityName")[0].innerHTML = data.city.name;
            $(".weatherIcon")[0].src = "https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
            $(".temp")[0].innerHTML = Math.round((data.list[0].main.temp - 30)/1.8)/10+"°C";
            $(".humidity")[0].innerHTML = "Humidity: "+data.list[0].main.humidity+"%";
            $(".pressure")[0].innerHTML = "Pressure: "+data.list[0].main.pressure+"hPa";
            $(".tempMax")[0].innerHTML = "Temperature Max: "+Math.round((data.list[0].main.temp_max - 30)/1.8)/10+"°C";
            $(".tempMin")[0].innerHTML = "Temperature Min: "+Math.round((data.list[0].main.temp_min - 30)/1.8)/10+"°C";
        }
    });
};

//getWeather();