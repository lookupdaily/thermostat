$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#psm-switch').on('click', function() {
    thermostat.switchMode();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.showEnergyUsage());
  };
});
