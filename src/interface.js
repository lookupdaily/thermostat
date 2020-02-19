$(document).ready(function() {
  var thermostat = new Thermostat();
  displayTemperature();

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
    // $('#temperature').attr('class', thermostat.showEnergyUsage());
  };
});
