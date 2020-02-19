function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.MINIMUM_TEMP = 10
  this.PS_MAX_TEMP = 25
  this.MAX_TEMP = 32
  this._temperature = this.DEFAULT_TEMP
  this._powerSavingModeOn = true
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.isInPowerSavingMode()) {
    if (this._temperature < this.PS_MAX_TEMP) {
      this._temperature += 1
    }
  } else {
    if (this._temperature < this.MAX_TEMP) {
      this._temperature += 1
    }
  };
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
  return this._temperature -= 1;
};

Thermostat.prototype.switchMode = function() {
  this._powerSavingModeOn = !this._powerSavingModeOn;
};


Thermostat.prototype.reset = function() {
  this._temperature = this.DEFAULT_TEMP
};

Thermostat.prototype.showEnergyUsage = function() {
  var lowUsage = 18
  var mediumUsage = 25

  if (this._temperature < lowUsage) {
    return 'low-usage'
  } else if (this._temperature < mediumUsage) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  };
};

Thermostat.prototype.isMinimumTemperature = function() {
  return (this._temperature === this.MINIMUM_TEMP);
};

Thermostat.prototype.isInPowerSavingMode = function() {
  return this._powerSavingModeOn
};
