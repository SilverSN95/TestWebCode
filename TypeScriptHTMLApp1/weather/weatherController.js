(function () {
    'use strict';
    angular
        .module('app')
        .controller('WeatherController', WeatherController);
    function WeatherController(WeatherUndergroundService, ForecastIoService) {
        var weatherCtlr = this;
        weatherCtlr.forecastWU = [];
        weatherCtlr.forecastIO = [];
        weatherCtlr.activate = function () {
            WeatherUndergroundService.getForecast().then(function (data) {
                weatherCtlr.forecastWU = data;
            });
            ForecastIoService.getForecast().then(function (data) {
                weatherCtlr.forecastIO = data;
            });
        };
        //activate on load
        weatherCtlr.activate();
    }
})();
//# sourceMappingURL=weatherController.js.map