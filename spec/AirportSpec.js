describe("Airport", function() {

  var plane;
  var airport;
  var weather;
  var smallAirport;

  beforeEach(function() {
    weather = {
      isStormy: function(){}
    };
    airport = new Airport(weather);
    plane =  jasmine.createSpyObj('plane', ['land_at', 'take_off']);
    smallAirport = new Airport(weather, 1);
  });

  describe("accept_plane", function() {
    it("accepts a plane when given one", function() {
      spyOn(weather,'isStormy').and.returnValue(false);
      airport.accept_plane(plane);
      expect(airport._hangar).toContain(plane);
    });
  });

  describe("planes", function() {
    it("returns the hanger array", function() {
      expect(airport.planes()).toEqual([]);
      spyOn(weather,'isStormy').and.returnValue(false);
      airport.accept_plane(plane);
      expect(airport.planes()).toContain(plane);
    });
  });

  describe("release_plane", function(){
    it("removes plane from _hanger", function(){
      spyOn(Math, 'random').and.returnValue(1);
      airport.accept_plane(plane);
      spyOn(weather,'isStormy').and.returnValue(false);
      airport.release_plane(plane);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('capacity', function() {

    it('raises error when trying to land when airport is full', function() {
      spyOn(Math, 'random').and.returnValue(1);
      smallAirport.accept_plane(plane);
      var msg = 'Airport currently at capacity';
      spyOn(weather,'isStormy').and.returnValue(false);
      expect(function() {smallAirport.accept_plane(plane);}).toThrow(new Error(msg));
    });

    it('has a default capacity', function() {
      expect(airport._capacity).toEqual(20);
    });

    it('can be set a capacity', function() {
      expect(smallAirport._capacity).toEqual(1);
    });

  });

});
