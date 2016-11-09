describe('Weather Underground Service', function () {

	beforeEach(angular.mock.module('app'));
	
	var forecastday = {};
	forecastday.date = {};
	forecastday.date.weekday = 'Monday';
	
	forecastday.icon_url = 'foo.com';
	forecastday.conditions = 'sunny';
	forecastday.high = {};
	forecastday.low = {};
	
	forecastday.high.fahrenheit = '55';
	forecastday.low.fahrenheit = '44'
	
	var dayArray = [forecastday];
	
	var responseData = {};
	responseData.simpleforecast = {};
	responseData.simpleforecast.forecastday = dayArray;
	
	
	describe('getForecast', function () {
	
		it('should properly handle a successful call to external web service', inject(function($httpBackend,WeatherUndergroundService) {
		
			$httpBackend
				.when('GET', function(url) {
						return url.indexOf('localhost:8000/DEMOService/ForecastWU') !== -1;
					})
				.respond(200, { forecast: responseData });
				
			$httpBackend
				.expect('GET', function(url) {
						return url.indexOf('localhost:8000/DEMOService/ForecastWU') !== -1;
					});
				
			//spy on method but allow call to proceed
			spyOn(WeatherUndergroundService, 'successCallbackWU').and.callThrough();
			
			WeatherUndergroundService.getForecast();
				
			expect($httpBackend.flush).not.toThrow();
			
			expect(WeatherUndergroundService.successCallbackWU).toHaveBeenCalled();
			
		}));
		
		it('should properly handle a failed call to external web service', inject(function($httpBackend,WeatherUndergroundService) {
		
			$httpBackend
				.when('GET', function(url) {
						return url.indexOf('localhost:8000/DEMOService/ForecastWU') !== -1;
					})
				.respond(500, { data: null });
				
			$httpBackend
				.expect('GET', function(url) {
						return url.indexOf('localhost:8000/DEMOService/ForecastWU') !== -1;
					});
				
			spyOn(WeatherUndergroundService, 'errorCallback');
			
			WeatherUndergroundService.getForecast();
				
			expect($httpBackend.flush).not.toThrow();
			
			expect(WeatherUndergroundService.errorCallback).toHaveBeenCalled();
			
		}));
	});
		
});