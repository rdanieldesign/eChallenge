(function(){

	angular.module('GAdisasters')

	.controller('Home', ['$scope', 'HomeFactory', function($scope, HomeFactory){

		$scope.disasters = HomeFactory.organizeData(disasters);

		console.log($scope.disasters);

		$scope.deathFilter = function(x){
			return x.FATALITIES >= $scope.deathsLow && x.FATALITIES <= $scope.deathsHigh;
		};

		$scope.injuryFilter = function(x){
			return x.INJURIES >= $scope.injuryLow && x.FATALITIES <= $scope.injuryHigh;
		};

	}]);

}());