describe("FibonacciController", function () {
  beforeEach(module('fs-demo'));

  var $controller;
  var $scope;
  var controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe("upon instantiation", function () {
    it("should have no vals on data object", function () {
      $scope = {};
      controller = $controller('FibonacciController', {scope: $scope})
      expect($scope.data).toBeUndefined();
    });
  });
});
