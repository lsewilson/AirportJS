function Plane(){
  this.isInAir = true;
  this.airport_location = null;
}

Plane.prototype.land_at = function (airport) {
  airport.accept_plane(this);
  this._toggle_flight_status();
  this.airport_location = airport;
};

Plane.prototype.take_off = function() {
  airport_location.release_plane(this);
  this._toggle_flight_status();
  this.airport_location = null;
};

Plane.prototype._toggle_flight_status = function () {
  this.isInAir = !this.isInAir;
};
