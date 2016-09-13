
function Airport(){
  this._hanger = [];
}

Airport.prototype.accept_plane = function (plane) {
  this._hanger.push(plane);
};

Airport.prototype.planes = function () {
  return this._hanger;
};

Airport.prototype.release_plane = function(plane) {
  var index = this._hanger.indexOf(plane);
  this._hanger.splice(index,1);
};
