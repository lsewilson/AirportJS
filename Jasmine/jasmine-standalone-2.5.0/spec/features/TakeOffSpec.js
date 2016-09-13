describe("Take Off", function(){
  var plane;
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("a plane can take off from an airport", function(){
    plane.land_at(airport);
    plane.take_off_from(airport);
    expect(airport.planes()).toEqual([]);
  });
});
