var demoApp = angular.module('fs-demo', ['ui.bootstrap']  );

demoApp.component('fibonacciTypeahead', {
  templateUrl: 'fibonacci-typeahead.html',
  bindings: {
    data: '='
  }
});

demoApp.directive('numbersEntered', function() {
  return {
    templateUrl: 'numbers-entered.html',
    scope: {
      data  : '<'
    },
    controller: ['$scope', function ($scope) {
      $scope.numbers = [];

      $scope.$watch('data.selection', function (newVal, oldVal) {
        if (newVal) {
          $scope.numbers.push(newVal);
        }
      });
    }]
  }
});

demoApp.directive('runningTotal', function () {
  return {
    templateUrl: 'running-total.html',
    scope: {
      data: '<'
    },
    controller: ['$scope', function ($scope) {
      $scope.total = 0;

      $scope.$watch('data.selection', function (newVal, oldVal) {
        if (newVal) {
          $scope.total += newVal;
        }
      });
    }]
  };
});

demoApp.controller('FibonacciCtrl', ['$http', function FibonacciCtrl($http) {
  var self = this;

  self.data = {};

  $http.get('/fib').then(function success(res) {
    self.data.vals = res.data;
  });
}]);
