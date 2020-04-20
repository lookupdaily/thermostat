'use strict';

describe('Theromstat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('has an increase temperature button', function() {
    thermostat.increaseTemp();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('has a decrease temperature button', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('has a power-saving setting which defaults to on', function() {
    expect(thermostat.isInPowerSavingMode()).toEqual(true);
  });

  it('has a maximum temp of 25 degrees when in powersaving mode', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    };
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('can be switched out of powersaving mode', function() {
    thermostat.switchMode();
    expect(thermostat.isInPowerSavingMode()).toEqual(false);
  });

  it('can be switched back to powersaving mode', function() {
    thermostat.switchMode();
    thermostat.switchMode();
    expect(thermostat.isInPowerSavingMode()).toEqual(true);
  })

  it('has a maximum temp of 32 degrees when not in power saving mode', function() {
    thermostat.switchMode();
    for (var i = 0; i < 13; i++) {
      thermostat.increaseTemp();
    };
    expect(thermostat.getTemperature()).toEqual(32);
  });
  
  it ('returns a enery-usage of low when below 18 degrees', function() {
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    expect(thermostat.showEnergyUsage()).toEqual('low-usage');
  });
  
  it ('returns an energy-usage of medium when below 25 degrees', function() {
    expect(thermostat.showEnergyUsage()).toEqual('medium-usage');
  })

  it ('returns an energy-usage of high when above 25 degrees', function() {
    thermostat._temperature = 25;
    thermostat.switchMode();
    thermostat.increaseTemp();
    expect(thermostat.showEnergyUsage()).toEqual('high-usage');
  });

  it('can be reset to 20 degrees when reset button is clicked', function() {
    thermostat.increaseTemp();
    thermostat.reset();
    expect(thermostat._temperature).toEqual(20);
  });

});