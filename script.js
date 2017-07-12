angular.module("myApp", ["chart.js"])
.controller("DonutCtrl", function ($scope) {
  
  // labels
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  // data
  $scope.data = [300, 500, 100];

});