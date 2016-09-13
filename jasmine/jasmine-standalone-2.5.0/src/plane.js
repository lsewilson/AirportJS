function Plane(){}

Plane.prototype.land_at = function (airport) {
  airport.accept_plane(this);
};
