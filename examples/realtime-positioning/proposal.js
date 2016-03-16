var sensor = new GeolocationSensor({ accuracy: "low" });
sensor.start();
sensor.onreading = function(event) {
    var coords = [event.reading.latitude, event.reading.longitude];
    updateMap(null, coords, event.reading.accuracy);
};
sensor.onerror = function(error) {
    updateMap(error);
};
sensor.onstatechange = function(e) {
    console.log("STATE:", this.state)
};

