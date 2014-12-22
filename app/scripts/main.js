(function(){

	angular.module('GAdisasters', ['ngRoute', 'vr.directives.slider'])

	.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'Home'
		});

	});

}());


