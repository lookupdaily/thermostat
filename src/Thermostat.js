function Thermostat() {
  this._temperature = 20
};

Thermostat.prototype.increaseTemp = function(amount) {
  this._temperature += 1
};

Thermostat.prototype.decreaseTemp = function(amount) {
  this._temperature -= 1
};