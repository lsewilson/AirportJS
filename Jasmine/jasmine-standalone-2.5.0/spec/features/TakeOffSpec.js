describe("Take Off", function(){
  var plane;
  var airport;
  var bad_weather;
  var good_weather;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    bad_weather = {
      isStormy: true
    };
    good_weather = {
      isStormy: false
    };
  });

  it("a plane can take off from an airport", function(){
    plane.land_at(airport);
    plane.take_off_from(airport);
    expect(airport.planes()).toEqual([]);
  });

  it('prevents take off when weather is stormy', function () {
    plane.land_at(airport);

    // while (bad_weather.isStormy == false) {
    //   bad_weather = new Weather();
    // }

    if (weather.isStormy === true) {
      expect(plane.take_off()).toThrowError("Weather is stormy.");
    }
    else {
      plane.take
      expect(plane.take_off()).not.toThrowError();
    }


  });
});
