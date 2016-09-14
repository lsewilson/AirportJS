describe("Airport", function() {

  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane =  jasmine.createSpyObj('plane', ['land_at', 'take_off']);
  });

  describe("accept_plane", function() {
    it("accepts a plane when given one", function() {
      airport.accept_plane(plane);
      expect(airport._hangar).toContain(plane);
    });
  });

  describe("planes", function() {
    it("returns the hanger array", function() {
      expect(airport.planes()).toEqual([]);
      airport.accept_plane(plane);
      expect(airport.planes()).toContain(plane);
    });
  });

  describe("release_plane", function(){
    it("removes plane from _hanger", function(){
      airport.accept_plane(plane);
      airport.release_plane(plane);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('capacity', function() {
    var smallAirport;
    var weather;
    beforeEach(function() {
      smallAirport = new Airport(weather, 10);
      plane =  jasmine.createSpyObj('plane', ['land_at', 'take_off']);
    });
    it('raises error when trying to land when airport is full', function() {
      for (var i = 0; i < airport._capacity; i++) {
        airport.accept_plane(plane);
      }
      var msg = 'Airport currently at capacity';
      expect(function() {airport.accept_plane(plane);}).toThrow(new Error(msg));
    });
    it('has a default capacity', function() {
      expect(airport._capacity).toEqual(20);
    });
    it('can be set a capacity', function() {
      expect(smallAirport._capacity).toEqual(10);
    });
  });

});
