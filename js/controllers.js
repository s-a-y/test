var testApp = angular.module('testApp', []);

testApp.controller('testCtrl', ['$scope', '$http', '$sce',
  function testCtrl($scope, $http, $sce) {

    setTimeout(function() {
      $http.get('/js/items.json').success(function(data) {
        document.querySelector("test-element").lines = data;
      });

    }, 1000);

  }]);

