
function Airport(){
  this._hanger = [];
}

Airport.prototype.accept_plane = function (plane) {
  this._hanger.push(plane);
};

Airport.prototype.planes = function () {
  return this._hanger;
};
