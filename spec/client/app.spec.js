describe("fs-demo app", function () {
  var $controller;
  var $scope;
  var $rootScope;
  var controller;
  var $httpBackend;
  var reqHandler;
  var vals = [];
  while (vals.length < 30) {
    vals.push(1);
  }

  beforeEach(module('fs-demo'));

  describe("NumbersEnteredController", function () {
    beforeEach(inject(function( $injector){
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
    }));

    beforeEach(function () {
      $scope = $rootScope.$new();
      controller = $controller('NumbersEnteredController', {$scope: $scope})
    });

    describe("on instantiation", function () {
      it("should have an empty numbers array", function () {
        expect($scope.numbers.length).toBe(0);
      });
    });

    describe("on change of data.selection", function () {
      it("should add new number to numbers array", function () {
        $scope.numbers = [1,2,3];
        var oldNumLength = $scope.numbers.length;
        $scope.data = {};
        $scope.data.selection = 4;
        $scope.$digest();
        expect($scope.numbers.length).toBe(oldNumLength + 1);
        expect($scope.numbers[$scope.numbers.length - 1]).toBe(4);
      });
    })
  });

  describe("RunningTotalController", function () {
    beforeEach(inject(function( $injector){
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
    }));

    beforeEach(function () {
      $scope = $rootScope.$new();
      controller = $controller('RunningTotalController', {$scope: $scope})
    });

    describe("on instantiation", function () {
      it("should have total of 0", function () {
        expect($scope.total).toBe(0);
      });
    });

    describe("on change of data.selection", function () {
      it("should add new value to total", function () {
        $scope.total = 100;
        $scope.data = {};
        $scope.data.selection = 5;
        $scope.$digest();
        expect($scope.total).toBe(105);
      });
    });
  });

  describe("FibonacciController", function () {
    beforeEach(inject(function( $injector){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = $injector.get('$controller');
      $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(function () {
      $scope = {};
      controller = $controller('FibonacciController', {$scope: $scope})
      reqHandler = $httpBackend.when('GET', '/fib').respond(200, vals);
    });

    describe("upon instantiation", function () {
      it("should have no vals on data object", function () {
        expect(controller.data.vals).toBeUndefined();
      });

      it("should make a request to /fib", function () {
        $httpBackend.expectGET('/fib');
        $httpBackend.flush();
      });

      it("should have loaded an array of length 30 on data.vals after http resolves", function () {
        $httpBackend.flush();
        expect(controller.data.vals.length).toBe(30);
      });
    });
  });
});
