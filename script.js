angular.module("myApp", ["chart.js"])
.controller("dataCtrl", function ($scope, $http) {
  
  $scope.tableData = [];
  $scope.error = "";
  $scope.graphData = [];
  $scope.graphLabels = [];

  $scope.options = {
  	categoryPercentage : 0.9,
  	barPercentage : 0.1
  }

  // Simple POST request example:
	$http({
	  method: 'GET',
	  url: 'dist/data/school-data.json'
	}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.tableData = response.data;
    
    for (var i = 0; i <= response.data.data.length - 1; i++) {
    	$scope.graphData.push(response.data.data[i][6]);
    	$scope.graphLabels.push(response.data.data[i][1]);
    }

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.error = response;
  });

});