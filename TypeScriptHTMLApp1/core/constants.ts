//API keys stored client side for demonstration purpose. Should be server-side in an actual implementation.
(function() {
	'use strict';
	angular
		.module('app')
		.constant('WEATHER_UNDERGROUND_CONSTANTS', {
			'WEATHER_UNDERGROUND_KEY' : '0a10eba75ee3dcf4'
		})
		.constant('FORECAST_IO_CONSTANTS', {
			'FORECAST_IO_KEY' : 'e9a5ad09eaa11b3ebd54ad53694ca701'
		})
		.constant('NEWARK_LAT', '39.6837')
		.constant('NEWARK_LON', '-75.7497')
		.constant('WEEKDAYS', ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
		
})();