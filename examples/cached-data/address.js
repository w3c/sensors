function getAddress(coords, cb) {
    new google.maps.Geocoder().geocode({
        location: { lat: coords.latitude, lng: coords.longitude }
    }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results) {
                cb(null, toAddressObj(results[0]));
            } else {
                cb(null, null);
            }
        } else {
            cb(new Error(status));
        }
    });
}

function toAddressObj(result) {
    var output = {};
    result.address_components.forEach(function(c) {
        var t = c.types;
        if (t.indexOf("street_number") > -1) {
            output.street_number = c.long_name
        } else if (t.indexOf("street_address") > -1 || t.indexOf("route") > -1) {
            output.street = c.long_name
        } else if (t.indexOf("locality") > -1) {
            output.city = c.long_name
        } else if (t.indexOf("postal_code") > -1) {
            output.zipcode = c.long_name
        } else if (t.indexOf("administrative_area_level_1") > -1) {
            output.state = c.long_name
        } else if (t.indexOf("country") > -1) {
            output.country = c.long_name
        }
    });
    return output;
}

function updateForm(address) {
    var street = [address.street_number, address.street].join(", ");
    document.getElementById("street").value = street;
    document.getElementById("zipcode").value = address.zipcode;
    document.getElementById("city").value = address.city;
    document.getElementById("state").value = address.state;
    document.getElementById("country").value = address.country;
}

function updateMsg(type, txt) {
    var msg = document.getElementById("msg");
    msg.className = type;
    msg.innerHTML = txt;
}

var msg = (function() {
    var LINK = "<a href=# onclick='getItAnyway(); return false;'>I don't care, prefill away!</a>";
    return {
        plentyOfBattery: function() {
            updateMsg("success", "You still have plenty of battery. Fetching geo-data to prefill the form.");
        },
        checkingBattery: function() {
            updateMsg("info", "Couldn't find fresh enough geo-coordinates. Checking your battery life…");
        },
        noBattery: function(e) {
            updateMsg("error",  "Can't find out what you battery level is. Better fill this by hand. " + LINK);
        },
        lowBattery: function(level) {
            updateMsg("error", "Your battery's barely at " + Math.ceil(level * 100 )+ "%, better fill this by hand. " + LINK);
        },
        error: function(e) {
            updateMsg("error",  ":( No luck, you're on your own. (" + e.message + ")");
        },
        success: function() {
            updateMsg("success",  "And this is where we think you're located right now!");
        },
        cacheHit: function() {
            updateMsg("success",  "Found your address from cached geo-coordinates, saving battery life in the process.");
        }
    }
})();

