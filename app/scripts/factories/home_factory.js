(function(){

	angular.module('GAdisasters')

	.factory('HomeFactory', [function(){

		var organizeData = function(data){
			return _.sortBy(data, function(x){
				var myDate = x.HAZARD_BEGIN_DATE;
				return new Date(myDate).getTime();
			});
		};

		return {
			organizeData: organizeData
		};

	}]);

}());