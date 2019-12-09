
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
    $(".sidenav").append(cityButton);
    $(".sidenav").append("<br>");
}

function displayCityWeather() {
    var city = $("#userCity").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=city,Burundi&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
       
    console.log(response);
    });

  }

