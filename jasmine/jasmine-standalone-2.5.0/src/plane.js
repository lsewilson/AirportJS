function Plane(){
  this.isInAir = true;
}

Plane.prototype.land_at = function (airport) {
  airport.accept_plane(this);
  this._toggle_flight_status();
};

Plane.prototype.take_off_from = function(airport) {
  airport.release_plane(this);
  this._toggle_flight_status();
};

Plane.prototype._toggle_flight_status = function () {
  this.isInAir = !this.isInAir;
};
