var demoApp = angular.module('fs-demo', ['ui.bootstrap']  );

demoApp.component('fibonacciTypeahead', {
  templateUrl: 'fibonacci-typeahead.html',
  bindings: {
    data: '='
  }
});

demoApp.controller('NumbersEnteredController', function NumbersEnteredController($scope) {
  $scope.numbers = [];

  $scope.$watch('data.selection', function (newVal, oldVal) {
    if (newVal) {
      $scope.numbers.push(newVal);
    }
  });
});

demoApp.directive('numbersEntered', function() {
  return {
    templateUrl: 'numbers-entered.html',
    scope: {
      data  : '<'
    },
    controller: 'NumbersEnteredController'
  };
});

demoApp.controller('RunningTotalController', function RunningTotalController($scope) {
  $scope.total = 0;

  $scope.$watch('data.selection', function (newVal, oldVal) {
    if (newVal) {
      $scope.total += newVal;
    }
  });
});

demoApp.directive('runningTotal', function () {
  return {
    templateUrl: 'running-total.html',
    scope: {
      data: '<'
    },
    controller: 'RunningTotalController'
  };
});

demoApp.controller('FibonacciController', ['$http', function FibonacciCtrl($http) {
  var self = this;

  self.data = {};

  $http.get('/fib').then(function success(res) {
    self.data.vals = res.data;
  });
}]);
