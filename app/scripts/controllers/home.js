(function(){

	angular.module('GAdisasters')

	.controller('Home', ['$scope', 'HomeFactory', '$window', function($scope, HomeFactory, $window){

		// $scope.disasters = HomeFactory.organizeData(disasters);

		$scope.disasters2010 = HomeFactory.yearDivide(disasters, 2010);

		$scope.disasters2011 = HomeFactory.yearDivide(disasters, 2011);

		$scope.disasters2012 = HomeFactory.yearDivide(disasters, 2012);

		$scope.deathRange = { from: 0, to: 10};
		$scope.injuryRange = { from: 0, to: 30};
		$scope.propertyRange = { from: 0, to: 25};
		$scope.cropRange = { from: 0, to: 100};

		$scope.deathFilter = function(x){
			return x.FATALITIES >= $scope.deathRange.from && x.FATALITIES <= $scope.deathRange.to;
		};

		$scope.injuryFilter = function(x){
			return x.INJURIES >= $scope.injuryRange.from && x.INJURIES <= $scope.injuryRange.to;
		};

		$scope.propertyFilter = function(x){
			var damage = x.PROPERTY_DAMAGE / 1000000;
			return damage >= $scope.propertyRange.from && damage <= $scope.propertyRange.to;
		};

		$scope.cropFilter = function(x){
			var damage = x.CROP_DAMAGE / 1000000;
			return damage >= $scope.cropRange.from && damage <= $scope.cropRange.to;
		};

		$scope.dropDown = function(event){
			var el = angular.element(event.target);
			var leftDist = el.prop('offsetLeft')﻿;
			var winWidth = $window.innerWidth

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