
function Airport(){
  this._hanger = [];
}

Airport.prototype.accept_plane = function (plane, weather) {
  var weather = (typeof weather !== 'undefined') ? weather : new Weather();

  this._hanger.push(plane);
};

Airport.prototype.planes = function () {
  return this._hanger;
};

Airport.prototype.release_plane = function(plane, weather) {
  var index = this._hanger.indexOf(plane);
  this._hanger.splice(index,1);
};
