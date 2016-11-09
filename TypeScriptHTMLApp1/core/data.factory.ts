(function () {
    'use strict';
    angular
        .module('app')
        .factory('DataFactory', DataFactory);

    function DataFactory() {
        var factory : any = {};

        factory.getForecastObject = function (day, icon, description, high, low) {
            var forcastObj = new Forecast(day, icon, description, high, low);

            return forcastObj;
        }

        return factory;
    }

    class Forecast {
        day: string;
        icon: string;
        description: string;
        high: string;
        low: string;
        constructor(day, icon, description, high, low) {
            this.day = day;
            this.icon = icon;
            this.description = description;
            this.high = high;
            this.low = low;
        }
    }

})();