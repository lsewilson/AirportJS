describe('fizzbuzz', function() {

  it("number divisible by 3 returns fizz", function() {
      expect(fizzbuzz(3)).toEqual('fizz');
      expect(fizzbuzz(18)).toEqual('fizz');
  });

  it("returns 'buzz' if number is divisible by 5", function () {
      expect(fizzbuzz(5)).toEqual('buzz');
      expect(fizzbuzz(35)).toEqual('buzz');
  });

  it("returns 'fizzbuzz' if number is divisible by 15", function(){
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
    expect(fizzbuzz(45)).toEqual('fizzbuzz');
  });

});
