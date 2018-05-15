describe('Javabuzz', function() {

  var javabuzz;

  describe('know when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('know when a number is NOT', function() {

    it('divisible by 3', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(4)).not.toBe(true);
    });

  });

});
