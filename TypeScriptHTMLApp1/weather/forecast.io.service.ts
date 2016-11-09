(function() {
	'use strict';
	angular
		.module('app')
		.service('ForecastIoService', WebService);
		
	function WebService($window, $http, FORECAST_IO_CONSTANTS, DataFactory, Utils, NEWARK_LAT, NEWARK_LON, WEEKDAYS){
		
		var webService = this;
		
		webService.getForecast = function(){
			return $http.get('http://localhost:8000/DEMOService/ForecastIO').then(webService.successCallback, webService.errorCallback);;
		}
		
		//map external response to local forecast object
		webService.mapWebResponse = function(forecastDay){
			
			var forecast = [];
			
			angular.forEach(forecastDay, function(day, key) {
				
				//multiplier to convert UNIX time from seconds to ms
				var date = new Date(day.time*1000);
				var dayInt = date.getDay();
				
				//map the icon text to a matching icon as forecast.io does not provide one
				var icon = Utils.mapIconTextToURL(day.icon);
				
				forecast.push(DataFactory.getForecastObject(WEEKDAYS[dayInt], icon, day.summary, day.temperatureMax.toPrecision(2), day.temperatureMin.toPrecision(2)));
			});
			
			return forecast;
		}
		
		webService.errorCallback = function(){
			$window.alert("Error calling forecast.io web service!");
		}
		

		webService.successCallback = function(response){
			return webService.mapWebResponse(response.data.daily.data);
		}
		
	}
	
})();