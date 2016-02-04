

| Sensor type | Android name                                                 | Underlying physical sensors                                                 | Reporting mode on Android |
| ----------- | ------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------- |
|             | [Accelerometer][a_accelerometer]                             | Accelerometer                                                               | Continuous                |
|             | [Ambient temperature][a_ambient_temperature]                 |                                                                             | On-change                 |
|             | [Magnetic field sensor][a_magnetic_field_sensor]             | Magnetometer                                                                | Continuous                |
|             | [Gyroscope][a_gyroscope]                                     | Gyroscope                                                                   | Continuous                |
|             | [Heart Rate][a_heart_rate]                                   |                                                                             | On-change                 |
|             | [Light][a_light]                                             |                                                                             | On-change                 |
|             | [Proximity][a_proximity]                                     |                                                                             | On-change                 |
|             | [Pressure][a_pressure]                                       |                                                                             | Continuous                |
|             | [Relative humidity][a_relative_humidity]                     |                                                                             | On-change                 |
|             | [Game rotation vector][a_game_rotation_vector]               | Accelerometer, Gyroscope MUST NOT USE Magnetometer                          | Continuous                |
|             | [Geomagnetic rotation vector][a_geomagnetic_rotation_vector] | Accelerometer, Magnetometer, MUST NOT USE Gyroscope                         | Continuous                |
|             | [Gravity][a_gravity]                                         | Accelerometer, Gyroscope                                                    | Continuous                |
|             | [Gyroscope uncalibrated][a_gyroscope_uncalibrated]           | Gyroscope                                                                   | Continuous                |
|             | [Linear acceleration][a_linear_acceleration]                 | Accelerometer, Gyroscope (if present) or Magnetometer (if gyro not present) | Continuous                |
|             | [Magnetic field uncalibrated][a_magnetic_field_uncalibrated] | Magnetometer                                                                | Continuous                |
|             | [Rotation vector][a_rotation_vector]                         | Accelerometer, Magnetometer, AND (when present) _Gyroscope_                 | Continuous                |
|             | [Significant motion][a_significant_motion]                   | Accelerometer (or another as long as very low power)                        | One-shot                  |
|             | [Step counter][a_step_counter]                               | Accelerometer                                                               | On-change                 |
|             | [Step detector][a_step_detector]                             | Accelerometer                                                               | Special                   |
|             | [Tilt detector][a_tilt_detector]                             | Accelerometer                                                               | Special                   |

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
