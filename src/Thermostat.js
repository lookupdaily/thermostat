function Thermostat() {
  this._temperature = 20
  this._powerSavingModeOn = true
};

Thermostat.prototype.increaseTemp = function(amount) {
  this._temperature += 1
};

Thermostat.prototype.decreaseTemp = function(amount) {
  if (this._temperature > 10) {
    this._temperature -= 1
  }
};

Thermostat.prototype.isInPowerSavingMode = function() {
  return this._powerSavingModeOn
};

thermostat = new Thermostat();
console.log(thermostat.isInPowerSavingMode())