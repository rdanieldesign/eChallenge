(function(){

	angular.module('GAdisasters')

	.controller('Home', ['$scope', 'HomeFactory', function($scope, HomeFactory){

		$scope.disasters = HomeFactory.organizeData(disasters);

		console.log($scope.disasters);

	}]);

}());