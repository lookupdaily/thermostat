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
    thermostat.increaseTemp(5);
    expect(thermostat._temperature).toEqual(25);
  });

});