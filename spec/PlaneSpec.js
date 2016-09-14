describe("Plane", function() {

  var plane;
  var airport;

  beforeEach(function() {
    airport = jasmine.createSpyObj('airport', ['accept_plane', 'release_plane']);
    plane =  new Plane();
  });

  it("plane starts in the air", function(){
    expect(plane.isInAir).toBe(true);
  });

  describe("land_at", function() {

    it("calls accept_plane", function() {
      plane.land_at(airport);
      expect(airport.accept_plane).toHaveBeenCalled();
    });

    it("changes plane to being in air to not in air", function(){
      plane.land_at(airport);
      expect(plane.isInAir).toBe(false);
    });
  });

  describe("take_off", function() {

    beforeEach(function(){
      plane.land_at(airport);
    });

    it("changes plane to being not in air to in air", function(){
      plane.take_off();
      expect(plane.isInAir).toBe(true);
    });

    it("calls release_plane", function(){
      plane.take_off();
      expect(airport.release_plane).toHaveBeenCalled();
    });
  });

});
