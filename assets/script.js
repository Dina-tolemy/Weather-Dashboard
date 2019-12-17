
var APIKey = "45e7195913a3f7dc07bb2a47da166ac8";
var cloudIcon = "https://image.flaticon.com/icons/png/512/1163/1163624.png";
var rainIcon = "https://image.flaticon.com/icons/png/512/1375/1375394.png";
var sunnyIcon = "https://image.flaticon.com/icons/png/512/861/861060.png";
var PartlySunnyIcon = "https://image.flaticon.com/icons/png/512/1146/1146869.png";

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
  const userEntryKey = "city";
  var cityButtonArray= localStorage.getItem(userEntryKey) ? JSON.parse(localStorage.getItem(userEntryKey)) : [];
  localStorage.removeItem(userEntryKey);
  cityButtonArray.push(city);
  localStorage.setItem(userEntryKey, JSON.stringify(cityButtonArray));
 // cityButton.text(JSON.parse(localStorage.getItem("city")));
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
    }).then(callback);

  });
}

function displayCityWeather() {
  var city = $("#userCity").val().trim();
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(callback);
}
function callback(response) {
  displayMainSection(response);
  setDaysOfWeek(response);
  //console.log(response);
}
function displayMainSection(response) {
  $("#cityName").text(response.city.name + "  ");

  if (response.list[0].weather[0].main == "Clear") {
    $("#cityName").append("<img src='"+sunnyIcon+"' style='width: 50px;'>");
  }
  else if (response.list[0].weather[0].main == "Rain") {
    $("#cityName").append("<img src='"+rainIcon+"' style='width: 50px;'>");
  }
  else if (response.list[0].weather[0].main == "Clouds") {
    $("#cityName").append("<img src='"+cloudIcon+"' style='width: 50px;'>");
  }
  else { $("#cityName").append("<img src='"+PartlySunnyIcon+"' style='width: 50px;'>"); }

  $("#cityTemp").text("Temp is: " + response.list[0].main.temp);
  $("#cityHumidity").text("The humidity is : " + response.list[0].main.humidity);
  $("#cityWindSpeed").text("The wind speed is : " + response.list[0].wind.speed);
}

function setDaysOfWeek(response) {
  for (var i = 1; i < 6; i++) {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    currentDate.setHours(3, 0, 0);
    var formattedDate = moment(currentDate).format("YYYY-MM-DD HH:mm:ss");
    var item = response.list.filter(x => x.dt_txt === formattedDate)[0];
    const divId = "#day" + i + "date";
    const weatherDivId = "#" + i + "DayWeather";
    const humdityDivId = "#" + i + "DayHumidity";
    $(divId).text(item.dt_txt);
    if (item.weather[0].main == "Clear") {
      $(divId).append("<img src='"+sunnyIcon+"' style='width: 50px;'>");
    }
    else if (item.weather[0].main == "Rain") {
      $(divId).append("<img src='"+rainIcon+"' style='width: 50px;'>");
    }
    else if (item.weather[0].main == "Clouds") {
      $(divId).append("<img src='"+cloudIcon+"' style='width: 50px;'>");
    }
    else {
      $(divId).append("<img src='"+PartlySunnyIcon+"' style='width: 50px;'>");
    }
    $(weatherDivId).text("Temp: " + item.main.temp);
    $(humdityDivId).text("Humidity: " + item.main.humidity);
  }
}
