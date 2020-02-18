function Thermostat() {
  this._temperature = 20
};

Thermostat.prototype.increaseTemp = function(amount) {
  this._temperature = this._temperature + amount
};