describe("Landing", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("a plane should land at an airport", function() {
    plane.land_at(airport);
    expect(airport.planes()).toContain(plane);
  });
});
