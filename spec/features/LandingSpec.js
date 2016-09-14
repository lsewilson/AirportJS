describe("Landing", function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport(weather);
    plane = new Plane();
  });

  it("a plane can land at an airport in good weather", function(){
    spyOn(weather,'isStormy').and.returnValue(false);
    plane.land_at(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('prevents landing when weather is stormy', function () {
    spyOn(weather,'isStormy').and.returnValue(true);
    expect(function() {plane.land_at(airport);}).toThrow(new Error('cannot take off during storm'));
  });
});
