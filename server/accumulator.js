module.exports = (() => {
  var _internalValue
  return {
    init: () => {
      _internalValue = 0;
    },
    total: () => {
      return _internalValue;
    },
    add: (num) => {
      if ('number' === typeof num &&
        num > 0 &&
        num === Math.floor(num)) {
        _internalValue += num;
      } else {
        throw new Error('Invalid Value');
      }
    }
  };

})();
