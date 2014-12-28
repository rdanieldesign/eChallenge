(function(){

	angular.module('GAdisasters')

	.controller('Home', ['$scope', 'HomeFactory', '$window', function($scope, HomeFactory, $window){

		// $scope.disasters = HomeFactory.organizeData(disasters);

		$scope.disasters2010 = HomeFactory.yearDivide(disasters, 2010);

		$scope.disasters2011 = HomeFactory.yearDivide(disasters, 2011);

		$scope.disasters2012 = HomeFactory.yearDivide(disasters, 2012);

		$scope.deathRange = { from: 0, to: 10};
		$scope.injuryRange = { from: 0, to: 20};
		$scope.propertyRange = { from: 0, to: 2500};
		$scope.cropRange = { from: 0, to: 1000};

		$scope.deathFilter = function(x){
			return x.FATALITIES >= $scope.deathRange.from && x.FATALITIES <= $scope.deathRange.to;
		};

		$scope.injuryFilter = function(x){
			return x.INJURIES >= $scope.injuryRange.from && x.INJURIES <= $scope.injuryRange.to;
		};

		$scope.propertyFilter = function(x){
			return x.PROPERTY_DAMAGE >= $scope.propertyRange.from && x.PROPERTY_DAMAGE <= $scope.propertyRange.to;
		};

		$scope.cropFilter = function(x){
			return x.CROP_DAMAGE >= $scope.cropRange.from && x.CROP_DAMAGE <= $scope.cropRange.to;
		};

		$scope.dropDown = function(event){
			var el = angular.element(event.target);
			var leftDist = el.prop('offsetLeft')﻿;
			var winWidth = $window.innerWidth
			console.log(el.prop('offsetLeft'))﻿;
			console.log($window.innerWidth);

			if(leftDist <= 120){
				el.addClass('leftBox');
			}
			else if(winWidth - leftDist <= 120){
				el.addClass('rightBox');
			}
			else{
				el.removeClass('leftBox rightBox');
			}
		};

	}]);

}());