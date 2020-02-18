function Thermostat() {
  this.DEFAULT_TEMP = 20
  this._temperature = this.DEFAULT_TEMP
  this.MINIMUM_TEMP = 10
  this._powerSavingModeOn = true
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return (this._temperature === this.MIMIMUM_TEMP);
};

Thermostat.prototype.isInPowerSavingMode = function() {
  return this._powerSavingModeOn
};

Thermostat.prototype.increaseTemp = function() {
  if (this._temperature < 25) {
    this._temperature += 1
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  return this._temperature -= 1
};
