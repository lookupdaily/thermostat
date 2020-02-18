function Thermostat() {
  this.DEFAULT_TEMP = 20
  this._temperature = this.DEFAULT_TEMP
  this.MINIMUM_TEMP = 10
  this._powerSavingModeOn = true
};

Thermostat.prototype.increaseTemp = function(amount) {
  if (this._temperature < 25) {
    this._temperature += 1
  }
};

Thermostat.prototype.decreaseTemp = function(amount) {
  if (this._temperature > this.MINIMUM_TEMP) {
    this._temperature -= 1
  }
};

Thermostat.prototype.isInPowerSavingMode = function() {
  return this._powerSavingModeOn
};