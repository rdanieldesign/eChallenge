(function(){

	angular.module('GAdisasters', ['ngRoute'])

	.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'Home'
		});

	});

}());


