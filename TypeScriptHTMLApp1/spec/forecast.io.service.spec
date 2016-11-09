describe('Forecast IO Service', function () {
	
		beforeEach(angular.mock.module('app'));
		
		var forecastday = {};
		forecastday.time = 1471471080;
		forecastday.icon = 'sunny';
		forecastday.summary = 'sunny';
		forecastday.temperatureMax = 55.55;
		forecastday.temperatureMin = 44.44;
		
		var dayArray = [forecastday];
		
		var responseData = {};
		responseData.data = {};
		responseData.data = dayArray;
	
		describe('getForecast', function () {
		
			it('should properly handle a successful call to external web service', inject(function($httpBackend,ForecastIoService) {
			
				$httpBackend
					.when('GET', function(url) {
							return url.indexOf('localhost:8000/DEMOService/ForecastIO') !== -1;
						})
					.respond(200, { daily: responseData });
					
				$httpBackend
					.expect('GET', function(url) {
							return url.indexOf('localhost:8000/DEMOService/ForecastIO') !== -1;
						});
				
				//spy on method but allow call to proceed
				spyOn(ForecastIoService, 'successCallback').and.callThrough();
				
				ForecastIoService.getForecast();
					
				expect($httpBackend.flush).not.toThrow();
				
				expect(ForecastIoService.successCallback).toHaveBeenCalled();
				
			}));
			
			it('should properly handle a failed call to external web service', inject(function($httpBackend,$window,ForecastIoService) {
			
				$httpBackend
					.when('GET', function(url) {
							return url.indexOf('localhost:8000/DEMOService/ForecastIO') !== -1;
						})
					.respond(500, { data: null });
					
				$httpBackend
					.expect('GET', function(url) {
							return url.indexOf('localhost:8000/DEMOService/ForecastIO') !== -1;
						});
					
				spyOn(ForecastIoService, 'errorCallback');
				
				ForecastIoService.getForecast();
					
				expect($httpBackend.flush).not.toThrow();
				
				expect(ForecastIoService.errorCallback).toHaveBeenCalled();
				
			}));
		});
});