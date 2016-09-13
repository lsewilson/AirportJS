describe("Airport", function() {

  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane =  jasmine.createSpyObj('plane', ['land_at']);
  });

  describe("accept_plane", function() {
    it("accepts a plane when given one", function() {
      airport.accept_plane(plane);
      expect(airport._hanger).toContain(plane);
    });
  });

  describe("planes", function() {
    it("returns the hanger array", function() {
      expect(airport.planes()).toEqual([]);
      airport.accept_plane(plane);
      expect(airport.planes()).toContain(plane);
    });
  });

});
