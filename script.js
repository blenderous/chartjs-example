angular.module("myApp", ["chart.js"])
.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'https://gist.github.com/blenderous/**']);
 })
.controller("DonutCtrl", function ($scope, $http) {
  
  // labels
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  // data
  $scope.data = [300, 500, 100];

  $scope.stateData = [];

  $scope.error = "";

  // Simple POST request example:
	$http({
	  method: 'GET',
	  url: 'https://gist.github.com/blenderous/62587ed25a505d6c858177d01e2eae7f#file-statewise-shool-information-json'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $scope.stateData = response.data;
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    $scope.error = response;
	  });

});