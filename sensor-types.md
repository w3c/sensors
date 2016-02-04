

| Sensor type | Underlying physical sensors                                                 | Android name                                                 | Reporting mode on Android |
| ----------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------- |
|             | Accelerometer                                                               | [Accelerometer][a_accelerometer]                             | Continuous                |
|             |                                                                             | [Ambient temperature][a_ambient_temperature]                 | On-change                 |
|             | Magnetometer                                                                | [Magnetic field sensor][a_magnetic_field_sensor]             | Continuous                |
|             | Gyroscope                                                                   | [Gyroscope][a_gyroscope]                                     | Continuous                |
|             |                                                                             | [Heart Rate][a_heart_rate]                                   | On-change                 |
|             |                                                                             | [Light][a_light]                                             | On-change                 |
|             |                                                                             | [Proximity][a_proximity]                                     | On-change                 |
|             |                                                                             | [Pressure][a_pressure]                                       | Continuous                |
|             |                                                                             | [Relative humidity][a_relative_humidity]                     | On-change                 |
|             | Accelerometer, Gyroscope MUST NOT USE Magnetometer                          | [Game rotation vector][a_game_rotation_vector]               | Continuous                |
|             | Accelerometer, Magnetometer, MUST NOT USE Gyroscope                         | [Geomagnetic rotation vector][a_geomagnetic_rotation_vector] | Continuous                |
|             | Accelerometer, Gyroscope                                                    | [Gravity][a_gravity]                                         | Continuous                |
|             | Gyroscope                                                                   | [Gyroscope uncalibrated][a_gyroscope_uncalibrated]           | Continuous                |
|             | Accelerometer, Gyroscope (if present) or Magnetometer (if gyro not present) | [Linear acceleration][a_linear_acceleration]                 | Continuous                |
|             | Magnetometer                                                                | [Magnetic field uncalibrated][a_magnetic_field_uncalibrated] | Continuous                |
|             | Accelerometer, Magnetometer, AND (when present) _Gyroscope_                 | [Rotation vector][a_rotation_vector]                         | Continuous                |
|             | Accelerometer (or another as long as very low power)                        | [Significant motion][a_significant_motion]                   | One-shot                  |
|             | Accelerometer                                                               | [Step counter][a_step_counter]                               | On-change                 |
|             | Accelerometer                                                               | [Step detector][a_step_detector]                             | Special                   |
|             | Accelerometer                                                               | [Tilt detector][a_tilt_detector]                             | Special                   |

[a_accelerometer]: https://source.android.com/devices/sensors/sensor-types.html#accelerometer                             
[a_ambient_temperature]: https://source.android.com/devices/sensors/sensor-types.html#ambient_temperature                 
[a_magnetic_field_sensor]: https://source.android.com/devices/sensors/sensor-types.html#magnetic_field_sensor             
[a_gyroscope]: https://source.android.com/devices/sensors/sensor-types.html#gyroscope                                     
[a_heart_rate]: https://source.android.com/devices/sensors/sensor-types.html#heart_rate                                   
[a_light]: https://source.android.com/devices/sensors/sensor-types.html#light                                             
[a_proximity]: https://source.android.com/devices/sensors/sensor-types.html#proximity                                     
[a_pressure]: https://source.android.com/devices/sensors/sensor-types.html#pressure                                       
[a_relative_humidity]: https://source.android.com/devices/sensors/sensor-types.html#relative_humidity                     
[a_game_rotation_vector]: https://source.android.com/devices/sensors/sensor-types.html#game_rotation_vector               
[a_geomagnetic_rotation_vector]: https://source.android.com/devices/sensors/sensor-types.html#geomagnetic_rotation_vector 
[a_gravity]: https://source.android.com/devices/sensors/sensor-types.html#gravity                                         
[a_gyroscope_uncalibrated]: https://source.android.com/devices/sensors/sensor-types.html#gyroscope_uncalibrated           
[a_linear_acceleration]: https://source.android.com/devices/sensors/sensor-types.html#linear_acceleration                 
[a_magnetic_field_uncalibrated]: https://source.android.com/devices/sensors/sensor-types.html#magnetic_field_uncalibrated 
[a_rotation_vector]: https://source.android.com/devices/sensors/sensor-types.html#rotation_vector                         
[a_significant_motion]: https://source.android.com/devices/sensors/sensor-types.html#significant_motion                   
[a_step_counter]: https://source.android.com/devices/sensors/sensor-types.html#step_counter                               
[a_step_detector]: https://source.android.com/devices/sensors/sensor-types.html#step_detector                             
[a_tilt_detector]: https://source.android.com/devices/sensors/sensor-types.html#tilt_detector                             
