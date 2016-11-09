(function () {
    'use strict';
    angular
        .module('app')
        .factory('DataFactory', DataFactory);
    function DataFactory() {
        var factory = {};
        factory.getForecastObject = function (day, icon, description, high, low) {
            var forcastObj = new Forecast(day, icon, description, high, low);
            return forcastObj;
        };
        return factory;
    }
    var Forecast = (function () {
        function Forecast(day, icon, description, high, low) {
            this.day = day;
            this.icon = icon;
            this.description = description;
            this.high = high;
            this.low = low;
        }
        return Forecast;
    }());
})();
//# sourceMappingURL=data.factory.js.map