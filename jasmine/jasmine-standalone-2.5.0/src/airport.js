
function Airport(){
  this._hanger = [];
  this._weather = new Weather();
}

Airport.prototype.accept_plane = function (plane, weather) {
  if (this._weather.isStormy() === false) {
    this._hanger.push(plane);
  }
  else {
    error;
  }
};

Airport.prototype.planes = function () {
  return this._hanger;
};

Airport.prototype.release_plane = function(plane, weather) {
  var index = this._hanger.indexOf(plane);
  this._hanger.splice(index,1);
};



// var weather = (typeof weather !== 'undefined') ? weather : new Weather();
