var accumulator = require('../../server/accumulator');
describe('accumulator', () => {
  var initialTotal;
  var total;

  describe('total', () => {
    describe('on init', () => {
      accumulator.init();
      it('has a total of 0', () => {
        expect(accumulator.total()).toBe(0);
      });
    });
  });

  describe('add', () => {
    describe('when passing a positive integer', () => {
      it('adds to the total', () => {
        for (num of [1, 2, 3, 4, 5]) {
          initialTotal = accumulator.total();
          accumulator.add(num);
          total = accumulator.total();
          expect(total).toBe(initialTotal + num);
        }
      });
    });

    describe('when passing invalid value of', () => {
      function testForAddError(val) {
        it('should throw an error', () => {
          expect(() => {accumulator.add(val)}).toThrowError();
        });
      }

      describe('a negative integer', () => {
        testForAddError(-4);
      });

      describe('a float', () => {
        testForAddError(1.23456);
      });

      describe('a non-number', () => {
        testForAddError('this string cannot be accumulated');
      });
    });

  });
});
