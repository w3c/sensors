"use strict";
window.sensors = window.sensors || {};
window.sensors.Geolocation = window.sensors.Geolocation || function (options) {
    var self = this;
    
    function onchange(position) {
        if (typeof self.onchange == "function") {
            self.onchange({ // TODO use real events
                data: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                }
            });
        }
    }
    
    function onerror(err) {
        if (typeof self.onerror == "function") {
            self.onerror(err);
        }
    }
    navigator.geolocation.watchPosition(onchange, onerror, {
        enableHighAccuracy: options.accuracy == "high", 
        maximumAge: 0, 
        timeout: Infinity
    });
};

window.sensors.Geolocation.requestData = function(options) {
    return new Promise(function(resolve, reject) {
        function onsuccess(position) {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy
            });
        }
        
        function onerror(err) {
            if (err.code === err.TIMEOUT) {
                resolve(null);
            } else {
                reject(err);
            }
        }
        var timeout = Infinity;
        if ("timeout" in options) timeout = options.timeout;
        if (options.fromCache) timeout = 0; // instant timeout to only get data from the cache
        
        navigator.geolocation.getCurrentPosition(onsuccess, onerror, {
            enableHighAccuracy: options.accuracy == "high", 
            maximumAge: options.maximumAge == null ? Infinity : options.maximumAge,
            timeout: timeout
        });
    });
}