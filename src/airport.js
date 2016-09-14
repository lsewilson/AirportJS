function Airport(weather, capacity){
  var DEFAULT_CAPACITY = 20;
  this._capacity = (typeof capacity !== 'undefined') ? capacity : DEFAULT_CAPACITY;
  this._hangar = [];
  this._weather = (typeof weather !== 'undefined') ? weather : new Weather();
}

Airport.prototype.accept_plane = function (plane) {
  if (this._weather.isStormy() === true) {
    throw new Error('cannot land during storm');
  }
  if (this._hangar.length >= this._capacity) {
    throw new Error('Airport currently at capacity');
  }
  this._hangar.push(plane);
};

Airport.prototype.planes = function () {
  return this._hangar;
};

Airport.prototype.release_plane = function(plane, weather) {
  if (this._weather.isStormy() === true) {
    throw new Error('cannot take off during storm');
  }
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index,1);
};
