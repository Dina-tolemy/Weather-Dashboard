
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=,Burundi&appid=" + APIKey;
var APIKey = "45e7195913a3f7dc07bb2a47da166ac8";

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
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityButtonName + ",Burundi&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      $("#cityName").text(city);
      $("#cityTemp").text("The city temp is : " + response.main.temp + response.weather[0].icon);
      $("#cityHumidity").text("The humidity is : " + response.main.humidity);
      $("#cityWindSpeed").text("The wind speed is : " + response.wind.speed);
      $("#cityUV").text("The UV index : " + response.wind.speed);
      console.log(response);
    })

  });
}
function displayCityWeather() {
  var city = $("#userCity").val().trim();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",Burundi&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#cityName").text(city);
    $("#cityTemp").text("The city temp is : " + response.main.temp + response.weather[0].icon);
    $("#cityHumidity").text("The humidity is : " + response.main.humidity);
    $("#cityWindSpeed").text("The wind speed is : " + response.wind.speed);
    $("#cityUV").text("The UV index : " + response.wind.speed);
  });
}





