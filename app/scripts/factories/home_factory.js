(function(){

	angular.module('GAdisasters')

	.factory('HomeFactory', [function(){

		var organizeData = function(data){
			return _.sortBy(data, function(x){
				var myDate = x.HAZARD_BEGIN_DATE;
				return new Date(myDate).getTime();
			});
		};

		var yearDivide = function(data, year){
			var filtered =  _.filter(data, function(x){
				var beginDate = x.HAZARD_BEGIN_DATE;
				var date = new Date(beginDate).getFullYear();
				return year == date;
			});
			return _.sortBy(filtered, function(x){
				var myDate = x.HAZARD_BEGIN_DATE;
				return new Date(myDate).getTime();
			});
		};

		return {
			organizeData: organizeData,
			yearDivide: yearDivide
		};

	}]);

}());