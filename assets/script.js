
//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=,Burundi&appid=" + APIKey;
var APIKey = "3226a9b62f884c5ea2679607d2537896";

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  displayCityButton();
  displayCityWeather();
});
function displayCityButton() {
  var city = $("#userCity").val().trim();
  var cityButton = $("<button>");
  cityButton.text(city);
  cityButton.attr("data-name", city);
  $(".sidenav").append(cityButton);
  $(".sidenav").append("<br>");
  $(cityButton).on("click", function (event) {
    event.preventDefault();
    var cityButtonName = $(this).attr("data-name");
    var queryURL = "https://api.weatherbit.io/v2.0/forecast/hourly?city=" + cityButtonName + "&hours=120&key=" + APIKey;
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityButtonName + ",Burundi&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      $("#cityName").text(response.city_name);
      $("#cityTemp").text("The city temp is : " + response.data[0].app_temp);
      $("#cityHumidity").text("The humidity is : " + response.data[0].rh);
      $("#cityWindSpeed").text("The wind speed is : " + response.data[0].wind_spd);
      $("#cityUV").text("The UV index : " + response.data[0].uv);

      $("#fDayWeather").text("The temp is : "+response.data[12].app_temp);
      $("#fDayHumidity").text("Humidity is : "+response.data[12].rh);
      $("#fDayUv").text("UV : "+response.data[12].uv);
  
      $("#secDayWeather").text("The temp is : "+response.data[24].app_temp);
      $("#secDayHumidity").text("Humidity is : "+response.data[24].rh);
      $("#secDayUv").text("UV : "+response.data[24].uv);
  
      $("#thirdDayWeather").text("The temp is : "+response.data[36].app_temp);
      $("#thirdDayHumidity").text("Humidity is : "+response.data[36].rh);
      $("#thirdDayUv").text("UV : "+response.data[36].uv);
  
      $("#forthDayWeather").text("The temp is : "+response.data[8].app_temp);
      $("#forthDayHumidity").text("Humidity is : "+response.data[8].rh);
      $("#forthDayUv").text("UV : "+response.data[8].uv);
  
      $("#fifthDayWeather").text("The temp is : "+response.data[47].app_temp);
      $("#fifthDayHumidity").text("Humidity is : "+response.data[47].rh);
      $("#fifthDayUv").text("UV : "+response.data[47].uv);
    })

  });
}
function displayCityWeather() {
  var city = $("#userCity").val().trim();
  var queryURL = "https://api.weatherbit.io/v2.0/forecast/hourly?city=" + city + "&hours=120&key=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#cityName").text(response.city_name);
    $("#cityTemp").text("The city temp is : " + response.data[0].app_temp);
    $("#cityHumidity").text("The humidity is : " + response.data[0].rh);
    $("#cityWindSpeed").text("The wind speed is : " + response.data[0].wind_spd);
    $("#cityUV").text("The UV index : " + response.data[0].uv);
    $("#fDayWeather").text("The temp is : "+response.data[12].app_temp);
    $("#fDayHumidity").text("Humidity is : "+response.data[12].rh);
    $("#fDayUv").text("UV : "+response.data[12].uv);
    $("#secDayWeather").text("The temp is : "+response.data[24].app_temp);
    $("#secDayHumidity").text("Humidity is : "+response.data[24].rh);
    $("#secDayUv").text("UV : "+response.data[24].uv);
    $("#thirdDayWeather").text("The temp is : "+response.data[36].app_temp);
    $("#thirdDayHumidity").text("Humidity is : "+response.data[36].rh);
    $("#thirdDayUv").text("UV : "+response.data[36].uv);
    $("#forthDayWeather").text("The temp is : "+response.data[8].app_temp);
    $("#forthDayHumidity").text("Humidity is : "+response.data[8].rh);
    $("#forthDayUv").text("UV : "+response.data[8].uv);
    $("#fifthDayWeather").text("The temp is : "+response.data[47].app_temp);
    $("#fifthDayHumidity").text("Humidity is : "+response.data[47].rh);
    $("#fifthDayUv").text("UV : "+response.data[47].uv);
    console.log(response);
  });
}





