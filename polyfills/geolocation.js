"use strict";
(function (exports) {
    function Sensor() {
        if (this.constructor === Sensor) {
            throw new TypeError("Illegal constructor");
        }
        var eventTarget = document.createDocumentFragment();

        function addEventListener(type, listener, useCapture, wantsUntrusted) {
            return eventTarget.addEventListener(type, listener, useCapture, wantsUntrusted);
        }

        function dispatchEvent(event) {
            var methodName = "on" + event.type;
            if (typeof this[methodName] == "function") {
                this[methodName](event);
            }
            return eventTarget.dispatchEvent(event);
        }

        function removeEventListener(type, listener, useCapture) {
            return eventTarget.removeEventListener(type, listener, useCapture);
        }

        this.addEventListener = addEventListener;
        this.dispatchEvent = dispatchEvent;
        this.removeEventListener = removeEventListener;
    
    }
    
    function SensorReading() {
    }
    
    function SensorReadingEvent(type, options) {
        var event = new Event(type, options);
        event.reading = options.reading;
        event.constructor = SensorReadingEvent;
        return event;
    }
    
    var GeolocationSensorReading = (function() {
        function GeolocationSensorReading(dict) {
            this.accuracy         = dict.accuracy;
            this.altitude         = dict.altitude;
            this.altitudeAccuracy = dict.altitudeAccuracy;
            this.heading          = dict.heading;
            this.latitude         = dict.latitude;
            this.longitude        = dict.longitude;
            this.speed            = dict.speed;
            this.timeStamp        = dict.timeStamp;
        }
        GeolocationSensorReading.prototype = Object.create(SensorReading.prototype, {
            // This probably needs to be changed to setters and getters, but can do for now.
            accuracy: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            },
            altitude: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            },
            altitudeAccuracy: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            },
            heading: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            },
            latitude: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            },
            longitude: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            },
            speed: {
                value: null,
                writable: true,
                configurable: true,
                enumerable: true
            }
        });
        GeolocationSensorReading.prototype.constructor = GeolocationSensorReading;
        return GeolocationSensorReading;
    })();


    var GeolocationSensor = (function () {
        var privateData = new WeakMap();
        function setSlot(self, name, value) {
            var priv = privateData.get(self) || {};
            priv[name] = value;
            privateData.set(self, priv);
            console.log("setSlot", name, value)
        
        }
        function getSlot(self, name) {
            var priv = privateData.get(self) || {};
            console.log("getSlot", name, priv[name])
            return priv[name];
        }
        function cleanup(self) {
            setSlot(self, "state", "idle"); // one of idle/starting/reporting
            setSlot(self, "_watchId", null);
            setSlot(self, "_startPromise", null);
            setSlot(self, "_startPromiseReject", null);
            self.reading = null;
        }
        function GeolocationSensor(options) {
            setSlot(this, "options", options);
            setSlot(this, "state", "idle");
            Sensor.call(this);
        }
        GeolocationSensor.prototype = Object.create(Sensor.prototype);
        GeolocationSensor.prototype.constructor = GeolocationSensor;
    
        GeolocationSensor.prototype.start = function() {
            console.log(getSlot(this, "state"))
            if (getSlot(this, "state") == "idle") {
                var self = this;
                setSlot(self, "state", "starting");
                setSlot(self, "_startPromise", new Promise(function(resolve, reject) {
                    setSlot(self, "_startPromiseReject", reject);
                
                
                    function onreading(position) {
                        var state = getSlot(self, "state");
                        if (state == "idle") {
                            // consumer no longer interested in sensor output
                            // stop right here.
                            return;
                        }
                    
                        if (state == "starting") {
                            // This is the first event after startup
                            setSlot(self, "state", "reporting");
                            resolve();
                        }
                    
                        var coords = position.coords;
                        var reading = new GeolocationSensorReading({
                            accuracy        : coords.accuracy,
                            altitude        : coords.altitude,
                            altitudeAccuracy: coords.altitudeAccuracy,
                            heading         : coords.heading,
                            latitude        : coords.latitude,
                            longitude       : coords.longitude,
                            speed           : coords.speed,
                            timeStamp       : position.timestamp // watch out for the diff casing, here.
                        });
                    
                        self.reading = reading;
                        var event = new SensorReadingEvent("reading", {
                            reading: reading
                        });
                        self.dispatchEvent(event);
                    }
        
                    function onerror(err) {
                        var errEvent = new ErrorEvent("error", {
                            message:  err.message,
                            filename: err.filename,
                            lineno:   err.lineno,
                            colno:    err.colno,
                            error:    err
                        });
                        cleanup(self);
                        self.dispatchEvent(errEvent);
                        reject(err);
                    }
                
                    setSlot(self, "_watchId", navigator.geolocation.watchPosition(onreading, onerror, {
                        enableHighAccuracy: getSlot(self, "options").accuracy == "high", 
                        maximumAge: 0, 
                        timeout: Infinity
                    }));
                }));
            }
            return getSlot(this, "_startPromise");
        };
    
        GeolocationSensor.prototype.stop = function() {
            var state = getSlot(self, "state");
            if (state == "idle") {
                return;
            }        
        
            navigator.geolocation.clearWatch(getSlot(this, "_watchId"));
            cleanup(this); // TODO cleanup needs cleanup
        
            if (state == "starting") {
                var reject = getSlot(this, "_startPromiseReject");
                reject(new Error("abort")); // TODO improve error message
            }
        };
    
        GeolocationSensor.prototype.reading = null;
        return GeolocationSensor;
    })();
    
    exports.Sensor                   = exports.Sensor                   || Sensor;
    exports.SensorReading            = exports.SensorReading            || SensorReading;
    exports.SensorReadingEvent       = exports.SensorReadingEvent       || SensorReadingEvent;
    exports.GeolocationSensorReading = exports.GeolocationSensorReading || GeolocationSensorReading;
    exports.GeolocationSensor        = exports.GeolocationSensor        || GeolocationSensor;

})(window);





