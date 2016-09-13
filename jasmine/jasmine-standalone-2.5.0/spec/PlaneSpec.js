describe("Plane", function() {

  var plane;
  var airport;

  beforeEach(function() {
    airport = jasmine.createSpyObj('airport', ['accept_plane']);
    plane =  new Plane();
  });

  // spyOn(airport, 'accept_plane')

  describe("land_at", function() {

    it("calls accept_plane", function() {
      plane.land_at(airport);
      expect(airport.accept_plane).toHaveBeenCalled();
    });
  });


});
