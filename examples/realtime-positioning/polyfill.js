"use strict";
window.sensors = window.sensors || {};
window.sensors.Geolocation = window.sensors.geolocation || function (options) {
    var self = this;
    
    function onchange(position) {
        if (typeof self.onchange == "function") {
            self.onchange({ // TODO use real events
                data: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
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