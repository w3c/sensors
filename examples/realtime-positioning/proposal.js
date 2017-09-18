var sensor = new GeolocationSensor({ accuracy: "low" });
sensor.start();
sensor.onreading = function() {
    var coords = [sensor.latitude, sensor.longitude];
    updateMap(null, coords, sensor.accuracy);
};
sensor.onerror = function(error) {
    updateMap(error);
};
