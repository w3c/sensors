function start() {
    var LOW_BATTERY = 0.2;
    
    function onsuccess(position) {
        getAddress(position.coords, function(err, address) {
            if (err) return msg.error(err);
            updateForm(address);
            msg.success();
        });
    }
    
    function getItAnyway() {
        updateMsg("info", "Fetching geolocation data to prefill the form…");
        navigator.geolocation.getCurrentPosition(onsuccess, msg.error, {
            enableHighAccuracy: true, 
            maximumAge: 0, // no-cache
            timeout: 10 * 1000 // Give this three seconds
        });
    }
    
    window.getItAnyway = getItAnyway;
    
    function cacheFetch() {
        updateMsg("info", "Fetching your cached geolocation to prefill the form…");
        navigator.geolocation.getCurrentPosition(oncachehit, oncachemiss, {
            enableHighAccuracy: true, 
            maximumAge: 60 * 1000, // 1 minute
            timeout: 0 // instant timeout to only get data from the cache
        });
    }
    
    function oncachehit(position) {
        getAddress(position.coords, function(err, address) {
            if (err) return msg.error(err);
            updateForm(address);
            msg.cacheHit();
        });
    }
    
    function oncachemiss(e) {
        if (typeof navigator.getBattery != "function") {
            msg.noBattery();
            return;
        }
        msg.checkingBattery();
        navigator.getBattery && navigator.getBattery().then(function(battery) {
            if (battery.level > LOW_BATTERY) {
                msg.plentyOfBattery(battery.level);
                getItAnyway();
            } else {
                msg.lowBattery(battery.level);
            }
        }, msg.noBattery);
    }
    
    cacheFetch();
}
