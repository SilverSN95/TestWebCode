describe('Weather Controller', function ($q) {
	
	var $controller;
	var mockWUService = {};
	var mockFIOService = {};
	var mockResult = [1,2,3,4,5,6,7];
	
	//make app available for each test
	beforeEach(angular.mock.module('app'));
	
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));
	
	//mock weather underground service
	beforeEach(inject( function($q){
		mockWUService.getForecast = function() {
			var deferred = $q.defer();
			deferred.resolve(mockResult);
			//mock returning of a promise
			return deferred.promise;
		};
	}));
	
	//mock forecast IO service
	beforeEach(inject( function($q){
		mockFIOService.getForecast = function() {
			var deferred = $q.defer();
			deferred.resolve(mockResult);
			//mock returning of a promise
			return deferred.promise;
		};
	}));

	describe('activate', function () {

		it('should call the web services to get the forcast', inject(function($rootScope) {

			var weatherController = $controller('WeatherController', {WeatherUndergroundService : mockWUService, 
				ForecastIoService : mockFIOService});
	
			weatherController.activate();
			
			expect(weatherController.forecastWU.length == 0).toBeTruthy();
			expect(weatherController.forecastIO.length == 0).toBeTruthy();
			
			// Propagate promise resolution to 'then' functions using $apply().
			$rootScope.$apply();

			expect(weatherController.forecastWU.length > 0).toBeTruthy();
			expect(weatherController.forecastIO.length > 0).toBeTruthy();
			
		})); 
	});
	
});