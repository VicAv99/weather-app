function weather() {
  var location = document.getElementById('location');
  var url = 'https://fcc-weather-api.glitch.me/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = '';

    $.getJSON(url + 'api/current?lon=' + longitude + '&lat=' + latitude, function(data) {
      $('<img src="' + data.weather[0].icon +'">').appendTo($('#icon'));
      $('#temp').html(data.main.temp + '° F');
      $('#minMax').html('min: ' + data.main.temp_min + '° F' + ' - ' + 'max: ' + data.main.temp_max + '° F');
      $('#description').html(data.weather[0].description);
      console.log(data);
    });
  }

  function error() {
    location.innerHTML = "can't find you...";
  }

  location.innerHTML = 'Locating...';
}

weather();