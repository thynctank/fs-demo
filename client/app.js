var demoApp = angular.module('fs-demo', []);

demoApp.component('fibonacciTypeahead', {
  templateUrl: 'fibonacci-typeahead.html',
  bindings: {
    selection: '='
  }
});

demoApp.component('numbersEntered', {
  templateUrl: 'numbers-entered.html',
  bindings: {
    selection: '='
  }
});

demoApp.component('runningTotal', {
  templateUrl: 'running-total.html',
  bindings: {
    selection: '='
  }
});

demoApp.controller('FibonacciCtrl', function FibonacciCtrl() {

});
