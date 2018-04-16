function weather() {
  var location = document.getElementById('location');
  var url = 'https://fcc-weather-api.glitch.me/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = '';

    $.getJSON(url + 'api/current?lon=' + longitude + '&lat=' + latitude, function(data) {
      let fahrenheit = Math.floor(9 / 5 * data.main.temp + 32);
      let min = Math.floor(9 / 5 * data.main.temp_min + 32);
      let max = Math.floor(9 / 5 * data.main.temp_max + 32);

      $('<img src="' + data.weather[0].icon +'">').appendTo($('#icon'));
      $('#temp').html(fahrenheit + '°f');
      $('#minMax').html('min: ' + min + '°f' + ' - ' + 'max: ' + max + '°f');
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