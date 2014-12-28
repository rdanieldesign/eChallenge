(function(){

	angular.module('GAdisasters', ['ngRoute', 'ngRangeSlider'])

	.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'Home'
		});

	});

}());


