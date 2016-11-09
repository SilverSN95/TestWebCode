(function () {
    'use strict';
    angular
        .module('app')
        .service('WeatherUndergroundService', WebService);
    function WebService($window, $http, WEATHER_UNDERGROUND_CONSTANTS, DataFactory) {
        var webService = this;
        webService.getForecast = function () {
            return $http.get('http://localhost:8000/DEMOService/ForecastWU').then(webService.successCallbackWU, webService.errorCallback);
        };
        //map external response to local forcast object
        webService.mapWebResponse = function (forecastDay) {
            var forecastWU = [];
            angular.forEach(forecastDay, function (day, key) {
                forecastWU.push(DataFactory.getForecastObject(day.date.weekday, day.icon_url, day.conditions, day.high.fahrenheit, day.low.fahrenheit));
            });
            return forecastWU;
        };
        webService.errorCallback = function () {
            $window.alert("Error calling Weather Underground web service!");
        };
        webService.successCallbackWU = function (response) {
            return webService.mapWebResponse(response.data.forecast.simpleforecast.forecastday);
        };
    }
})();
//# sourceMappingURL=weather.underground.service.js.map