(function(){

	angular.module('GAdisasters')

	.controller('Home', ['$scope', 'HomeFactory', function($scope, HomeFactory){

		// $scope.disasters = HomeFactory.organizeData(disasters);

		$scope.disasters2010 = HomeFactory.yearDivide(disasters, 2010);

		$scope.disasters2011 = HomeFactory.yearDivide(disasters, 2011);

		$scope.disasters2012 = HomeFactory.yearDivide(disasters, 2012);

		$scope.deathsLow = 0;
		$scope.deathsHigh = 18;
		$scope.deathFilter = function(x){
			return x.FATALITIES >= $scope.deathsLow && x.FATALITIES <= $scope.deathsHigh;
		};

		$scope.injuryLow = 0;
		$scope.injuryHigh = 18;
		$scope.injuryFilter = function(x){
			return x.INJURIES >= $scope.injuryLow && x.INJURIES <= $scope.injuryHigh;
		};

		$scope.propertyLow = 0;
		$scope.propertyHigh = 20000000;
		$scope.propertyFilter = function(x){
			return x.PROPERTY_DAMAGE >= $scope.propertyLow && x.PROPERTY_DAMAGE <= $scope.propertyHigh;
		};

		$scope.cropLow = 0;
		$scope.cropHigh = 90000000;
		$scope.cropFilter = function(x){
			return x.CROP_DAMAGE >= $scope.cropLow && x.CROP_DAMAGE <= $scope.cropHigh;
		};


	}]);

}());