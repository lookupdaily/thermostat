$(document).ready(function() {
  var thermostat = new Thermostat();
  displayTemperature();
  displayWeather();

  $('#temp-up').on('click', function() {
    thermostat.increaseTemp();
    displayTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.decreaseTemp();
    displayTemperature();
  });

  $('#psm-switch').on('click', function() {
    thermostat.switchMode();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    displayTemperature();
  })

  function displayTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#interface').attr('class', thermostat.showEnergyUsage());
  };

  function displayWeather() { 
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#weather-status').text(data.wind.speed);
    })
  }
  
});
