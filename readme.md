# Sensor API Unification Sketch

## Instances

- `sensors.*` constructors accept an "options object" that may contain device specific options, but must accept an optional `frequency` property. The `frequency` property's value is in hz and controls the number of sensor read cycles per second. (TODO: determine a reasonable default value for `frequency`)
```js
// One read cycle per second
var light = new sensors.AmbientLight({ frequency: 1 });

// 100 read cycles per second (ie. every 10ms)
var light = new sensors.AmbientLight({ frequency: 100 });
```


## Values

#### The `value` property of a `sensors.*` instance

- `null` until platform delivers first reading from device—this is very important. 
- `null` if device is disconnected

```js
var proximity = new sensors.Proximity();
var previous = proximity.value;

proximity.onchange = function() {
  if (previous === null) {
    console.log(this.value); // first value delivered.
    previous = this.value;
  }
};
```

## Events

- `connect` event when device is connected. 
  - If device is already connected when instance is initialized, queue task to fire `connect`.
- `disconnect` event when device is disconnected
- `error` when permission denied (specify value of `type` property?)
- `change` when sensor reading value changes



## Simulation

```js
(function() {
  // The WeakMap is used to represent a backing state mechanism.
  var priv = new WeakMap();

  // Private Base Class for all Sensors
  function Sensor(opts) {

    priv.set(this, {
      value: null,
      range: opts.range,
      frequency: opts.frequency || 100 /* whatever, just a reasonable default */
    });

    // This is only used by the simulator code
    // and will negate the benefits of the WeakMap.
    // Add to simulated system device sensor list.
    sensors.push({
      device: this,
      timestamp: Date.now()
    });
  }

  Sensor.prototype = {
    constructor: Sensor,
    get range() {
      return priv.get(this).range.slice();
    },
    get value() {
      return priv.get(this).value;
    },
  };

  /*
      Temperature

      Celcius, Fahrenheit

      @param opts object { unit: C | F }
   */

  function Temperature(opts) {
    opts = opts || {};
    Sensor.call(this, {
      range: Temperature.C.slice(),
      frequency: opts.frequency
    }, priv);

    opts = opts || {};

    var unit = opts.unit || "C";

    this.unit(unit);
  };

  Object.defineProperties(Temperature, {
    C: {
      value: [-40, 150],
      writable: false,
      configurable: false,
      enumerable: true
    },
    F: {
      value: [-40, 302],
      writable: false,
      configurable: false,
      enumerable: true
    }
  });

  Temperature.prototype = Object.create(Sensor.prototype, {
    constructor: {
      value: Temperature
    },
    unit: {
      value: function(unit) {
        var range = Temperature[(unit + "").toUpperCase() || "C"];

        if (range === void 0) {
          throw new Error("Invalid Temperature unit");
        }

        var state = priv.get(this);

        // This is not really what a unit mechanism would do,
        // this only for illustrative purposes.
        state.range[0] = range[0];
        state.range[1] = range[1];

        return this;
      }
    }
  });

  /*
      AmbientLight

      Lux

      @param opts object { range: [ lower, upper ] }
   */

  function AmbientLight(opts) {
    opts = opts || {};
    Sensor.call(this, {
      range: [0, 100000],
      frequency: opts.frequency
    }, priv);
  };

  AmbientLight.prototype = Object.create(Sensor.prototype, {
    constructor: {
      value: AmbientLight
    }
  });

  /*
      Proximity

      Centimeters

      @param opts object { range: [ lower, upper ] }
   */

  function Proximity(opts) {
    opts = opts || {};
    Sensor.call(this, {
      //  5 feet, in cm
      range: [0, 152.4],
      frequency: opts.frequency
    }, priv);
  };

  Proximity.prototype = Object.create(Sensor.prototype, {
    constructor: {
      value: Proximity
    }
  });


  // Expose the Sensor API.
  (window || global).sensors = {
    AmbientLight: AmbientLight,
    Proximity: Proximity,
    Temperature: Temperature,
  };



  // ------------------------------------------------------------
  // This part simulates a platform operation that is NOT
  // observable from by user program code. It is written
  // in a way that will the reader of this example to
  // run the code in a browser to witness the simulation.
  //
  //          THIS
  //
  //           IS
  //
  //          MEANT
  //
  //           TO
  //
  //        SIMULATE
  //
  //          IPC
  //
  //
  var sensors = [];

  setInterval(function() {
    sensors.forEach(function(registered) {
      var sensor = registered.device;
      var state = priv.get(sensor);
      var min = state.range[0];
      var max = state.range[1];
      var totallyMadeUpValue = Math.floor(Math.random() * (max - min + 1)) + min;

      // Sensor readings are delivered per the frequency param value
      var now = Date.now();
      var changeRecord;

      // This is only to simulate the behaviour of a controlled frequency
      if (now >= (sensor.timestamp + (1000 / state.frequency)) || state.value === null) {
        sensor.timestamp = now;

        state.value = totallyMadeUpValue;

        changeRecord = {
          timestamp: now,
          value: totallyMadeUpValue
        };

        if (typeof sensor.onchange === "function") {
          sensor.onchange.call(sensor, changeRecord);
        }
      }
    });
  }, 10);
  // End simulation mechanism


  // IIFE used to simulate the platform's "setup" needs
}());

// ------------------------------------------------------------------------------
// User code...

var illegal;

// Just a test of the base Sensor
try {
  illegal = new Sensor();
} catch (e) {
  console.log(e.message === "Illegal Constructor");
}

var temp = new sensors.Temperature({ unit: "C" });
// This will be `null` until the platform has
// delivered a reading from the sensor
console.log("temp", temp.value);

temp.onchange = function() {
  console.log("temp change", this.value);
};

var light = new sensors.Light();
// This will be `null` until the platform has
// delivered a reading from the sensor
console.log("light", light);

light.onchange = function() {
  console.log("light change", this.value);
};

var prox = new sensors.Proximity();
// This will be `null` until the platform has
// delivered a reading from the sensor
console.log("prox", prox);

prox.onchange = function() {
  console.log("prox change", this.value);
};


// And, the non-event based access...
//
requestAnimationFrame(function frame() {
  requestAnimationFrame(frame);

  // these might very well be null until the value is
  // delivered, but that's totall ok.

  if (temp.value !== null) {
    console.log("celcius: ", temp.value);
  }

  if (light.value !== null) {
    console.log("lux: ", light.value);
  }

  if (prox.value !== null) {
    console.log("cm: ", prox.value);
  }
});
