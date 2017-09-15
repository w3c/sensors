var sensor = new GeolocationSensor({ accuracy: "low" });
sensor.start();
sensor.onreading = function(event) {
    var coords = [event.latitude, event.longitude];
    updateMap(null, coords, event.accuracy);
};
sensor.onerror = function(error) {
    updateMap(error);
};
