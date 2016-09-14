
function Airport(weather){
  this._hangar = [];
  this._weather = (typeof weather !== 'undefined') ? weather : new Weather();
}

Airport.prototype.accept_plane = function (plane) {
  if (this._weather.isStormy() === true) {
    throw new Error('cannot land during storm');
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



// var weather =
