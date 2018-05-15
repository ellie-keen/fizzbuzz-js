describe('Javabuzz', function() {
  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('know when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBeTruthy();
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBeTruthy();
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBeTruthy();
    });
  });

  describe('know when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(4)).not.toBeTruthy();
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(6)).not.toBeTruthy();
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(16)).not.toBeTruthy();
    });
  });
});
