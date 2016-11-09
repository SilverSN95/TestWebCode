(function () {
    'use strict';
    angular
        .module('app')
        .factory('Utils', Utils);
    function Utils() {
        //map icon text to relevant icon gifs from weather underground
        var iconMap = new Map();
        //what icon to show if unexpected icon text is passed
        var defaultURL = 'http://icons.wxug.com/i/c/k/clear.gif';
        iconMap.set('clear-day', 'http://icons.wxug.com/i/c/k/clear.gif');
        iconMap.set('clear-night', 'http://icons.wxug.com/i/c/k/clear.gif');
        iconMap.set('wind', 'http://icons.wxug.com/i/c/k/clear.gif');
        iconMap.set('cloudy', 'http://icons.wxug.com/i/c/k/cloudy.gif');
        iconMap.set('fog', 'http://icons.wxug.com/i/c/k/fog.gif');
        iconMap.set('rain', 'http://icons.wxug.com/i/c/k/rain.gif');
        iconMap.set('sleet', 'http://icons.wxug.com/i/c/k/sleet.gif');
        iconMap.set('snow', 'http://icons.wxug.com/i/c/k/snow.gif');
        iconMap.set('partly-cloudy-day', 'http://icons.wxug.com/i/c/k/partlycloudy.gif');
        iconMap.set('partly-cloudy-night', 'http://icons.wxug.com/i/c/k/partlycloudy.gif');
        var utils = {};
        utils.mapIconTextToURL = function (iconText) {
            var iconURL = iconMap.get(iconText);
            if (iconText === undefined) {
                return defaultURL;
            }
            return iconURL;
        };
        return utils;
    }
})();
//# sourceMappingURL=utils.js.map