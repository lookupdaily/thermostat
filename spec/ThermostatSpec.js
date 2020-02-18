'use strict';

describe('Theromstat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20)
  })
});