
var APIKey = "45e7195913a3f7dc07bb2a47da166ac8";
var cloudIcon = $("<img>").attr("src", "https://image.flaticon.com/icons/png/512/1163/1163624.png").css("width", "50", "height", "50");
var rainIcon = $("<img>").attr("src", "https://image.flaticon.com/icons/png/512/1375/1375394.png").css("width", "50", "height", "50");
var sunnyIcon = $("<img>").attr("src", "https://image.flaticon.com/icons/png/512/861/861060.png").css("width", "50", "height", "50");
var PartlySunnyIcon = $("<img>").attr("src","https://image.flaticon.com/icons/png/512/1146/1146869.png").css("width", "50", "height", "50");

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  displayCityButton();
  displayCityWeather();
});
function displayCityButton() {
  var city = $("#userCity").val().trim();
  var citylink = $("<li>");
  var cityButton = $("<a>");
  $(cityButton).css("fontSize", "22px");
  $(cityButton).css("padding", "5px");
  $(cityButton).css("color", "rgb(53, 52, 52)");
  $(citylink).css("border-radius", "10px");
  $(citylink).css("border", " .5px solid rgb(111, 113, 114)");
  cityButton.text(city);
  citylink.append(cityButton);
  cityButton.attr("data-name", city);
  $("#cities").append(citylink);
  $(cityButton).on("click", function (event) {
    event.preventDefault();
    var cityButtonName = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityButtonName + "&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      $("#cityName").text(response.city.name + "  ");
      if (response.list[0].weather[0].main =="Clear") {
        $("#cityName").append(sunnyIcon);
      }
      else if (response.list[0].weather[0].main =="Rain") {
        $("#cityName").append(rainIcon);
      }
      else if (response.list[0].weather[0].main == "Clouds") {
        $("#cityName").append(cloudIcon);
      }
      else {$("#cityName").append(PartlySunnyIcon)}
      $("#cityTemp").text("Temp is: " + response.list[0].main.temp);
      $("#cityHumidity").text("The humidity is : " + response.list[0].main.humidity);
      $("#cityWindSpeed").text("The wind speed is : " + response.list[0].wind.speed);
      $("#day1date").text(response.list[8].dt_txt);

      if (response.list[8].weather[0].main =="Clear") {
        $("#day1date").append(sunnyIcon);
      }
      else if (response.list[8].weather[0].main =="Rain") {
        $("#day1date").append(rainIcon);
      }
      else if (response.list[8].weather[0].main == "Clouds") {
        $("#day1date").append(cloudIcon);
      }
      else { $("#day1date").append(PartlySunnyIcon)}
      $("#fDayWeather").text("Temp: " + response.list[8].main.temp);
      $("#fDayHumidity").text("Humidity: " + response.list[8].main.humidity);
      $("#day2date").text(response.list[16].dt_txt);
      if (response.list[16].weather[0].main =="Clear") {
        $("#day2date").append(sunnyIcon);
      }
      else if (response.list[16].weather[0].main =="Rain") {
        $("#day2date").append(rainIcon);
      }
      else if (response.list[16].weather[0].main == "Clouds") {
        $("#day2date").append(cloudIcon);
      }
      else { $("#day2date").append(PartlySunnyIcon)}
      $("#secDayWeather").text("Temp: " + response.list[16].main.temp);
      $("#secDayHumidity").text("Humidity: " + response.list[16].main.humidity);
      $("#day3date").text(response.list[24].dt_txt);
      if (response.list[24].weather[0].main =="Clear") {
        $("#day3date").append(sunnyIcon);
      }
      else if (response.list[24].weather[0].main =="Rain") {
        $("#day3date").append(rainIcon);
      }
      else if (response.list[24].weather[0].main == "Clouds") {
        $("#day3date").append(cloudIcon);
      }
      else { $("#day3date").append(PartlySunnyIcon); }
      $("#thirdDayWeather").text("Temp: " + response.list[24].main.temp);
      $("#thirdDayHumidity").text("Humidity: " + response.list[24].main.humidity);
      $("#day4date").text(response.list[32].dt_txt);
      if (response.list[32].weather[0].main =="Clear") {
        $("#day4date").append(sunnyIcon);
      }
      else if (response.list[32].weather[0].main =="Rain") {
        $("#day4date").append(rainIcon);
      }
      else if (response.list[32].weather[0].main == "Clouds") {
        $("#day4date").append(cloudIcon);
      }
      else { $("#day4date").append(PartlySunnyIcon); }
      $("#forthDayWeather").text("Temp: " + response.list[32].main.temp);
      $("#forthDayHumidity").text("Humidity: " + response.list[32].main.humidity);
      $("#day5date").text(response.list[39].dt_txt);
  
      if (response.list[39].weather[0].main =="Clear") {
        $("#day5date").append(sunnyIcon);
      }
      else if (response.list[39].weather[0].main =="Rain") {
        $("#day5date").append(rainIcon);
      }
      else if (response.list[39].weather[0].main == "Clouds") {
        $("#day5date").append(cloudIcon);
      }
      else { $("#day5date").append(PartlySunnyIcon); }
      $("#fifthDayWeather").text("Temp: " + response.list[39].main.temp);
      $("#fifthDayHumidity").text("Humidity: " + response.list[39].main.humidity);
    })
  });
}
function displayCityWeather() {
  var city = $("#userCity").val().trim();
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#cityName").text(response.city.name + "  ");
    
    if (response.list[0].weather[0].main =="Clear") {
      $("#cityName").append(sunnyIcon);
    }
    else if (response.list[0].weather[0].main =="Rain") {
      $("#cityName").append(rainIcon);
    }
    else if (response.list[0].weather[0].main == "Clouds") {
      $("#cityName").append(cloudIcon);
    }
    else { $("#cityName").append(PartlySunnyIcon); }

    $("#cityTemp").text("Temp is: " + response.list[0].main.temp);
    $("#cityHumidity").text("The humidity is : " + response.list[0].main.humidity);
    $("#cityWindSpeed").text("The wind speed is : " + response.list[0].wind.speed);
    $("#day1date").text(response.list[8].dt_txt);
    if (response.list[8].weather[0].main =="Clear") {
      $("#day1date").append(sunnyIcon);
    }
    else if (response.list[8].weather[0].main =="Rain") {
      $("#day1date").append(rainIcon);
    }
    else if (response.list[8].weather[0].main == "Clouds") {
      $("#day1date").append(cloudIcon);
    }
    else { $("#day1date").append(PartlySunnyIcon); }
    $("#fDayWeather").text("Temp: " + response.list[8].main.temp);
    $("#fDayHumidity").text("Humidity: " + response.list[8].main.humidity);
    $("#day2date").text(response.list[16].dt_txt);
    if (response.list[16].weather[0].main =="Clear") {
      $("#day2date").append(sunnyIcon);
    }
    else if (response.list[16].weather[0].main =="Rain") {
      $("#day2date").append(rainIcon);
    }
    else if (response.list[16].weather[0].main == "Clouds") {
      $("#day2date").append(cloudIcon);
    }
    else { $("#day2date").append(PartlySunnyIcon); }
    $("#secDayWeather").text("Temp: " + response.list[16].main.temp);
    $("#secDayHumidity").text("Humidity: " + response.list[16].main.humidity);
    $("#day3date").text(response.list[24].dt_txt);
    if (response.list[24].weather[0].main =="Clear") {
      $("#day3date").append(sunnyIcon);
    }
    else if (response.list[24].weather[0].main =="Rain") {
      $("#day3date").append(rainIcon);
    }
    else if (response.list[24].weather[0].main == "Clouds") {
      $("#day3date").append(cloudIcon);
    }
    else { $("#day3date").append(PartlySunnyIcon); }
    $("#thirdDayWeather").text("Temp: " + response.list[24].main.temp);
    $("#thirdDayHumidity").text("Humidity: " + response.list[24].main.humidity);
    $("#day4date").text(response.list[32].dt_txt);
    if (response.list[32].weather[0].main =="Clear") {
      $("#day4date").append(sunnyIcon);
    }
    else if (response.list[32].weather[0].main =="Rain") {
      $("#day4date").append(rainIcon);
    }
    else if (response.list[32].weather[0].main == "Clouds") {
      $("#day4date").append(cloudIcon);
    }
    else { $("#day4date").append(PartlySunnyIcon); }
    $("#forthDayWeather").text("Temp: " + response.list[32].main.temp);
    $("#forthDayHumidity").text("Humidity: " + response.list[32].main.humidity);
    $("#day5date").text(response.list[39].dt_txt);

    if (response.list[39].weather[0].main =="Clear") {
      $("#day5date").append(sunnyIcon);
    }
    else if (response.list[39].weather[0].main =="Rain") {
      $("#day5date").append(rainIcon);
    }
    else if (response.list[39].weather[0].main == "Clouds") {
      $("#day5date").append(cloudIcon);
    }
    else { $("#day5date").append(PartlySunnyIcon); }
    $("#fifthDayWeather").text("Temp: " + response.list[39].main.temp);
    $("#fifthDayHumidity").text("Humidity: " + response.list[39].main.humidity);
   console.log(response);
  });
}





