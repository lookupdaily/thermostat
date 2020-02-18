'use strict';

describe('Theromstat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20);
  });

  it('has an increase temperature button', function(){
    thermostat.increaseTemp();
    expect(thermostat._temperature).toEqual(21);
  });

  it('has a decrease temperature button', function(){
    thermostat.decreaseTemp();
    expect(thermostat._temperature).toEqual(19);
  });

  it('has a minimum temperature', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat._temperature).toEqual(10);
  });

  it('has a power-saving setting which defaults to on', function() {
    expect(thermostat.isInPowerSavingMode).toBeTrue()
  });

});