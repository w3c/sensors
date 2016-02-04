

| Sensor type                   | Underlying physical sensors                                                 | Android name                                                 | Reporting mode on Android | iOS name                                                      | Reporting mode on iOS                |
| ----------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------- | ------------------------------------ |
| Geolocation Sensor            | GPS, cell triangulation, etc.                                               | [Location][a_location]                                       | On-change                 | TODO                                                          |                                      |
| *Accelerometer*               | Accelerometer                                                               | [Accelerometer][a_accelerometer]                             | Continuous                | [Accelerometer acceleration][ios_accelerometer_acceleration]  | Continuous                           |
| Ambient Temperature Sensor    |                                                                             | [Ambient temperature][a_ambient_temperature]                 | On-change                 | TODO                                                          |                                      |
| Compass                       | Magnetometer                                                                | [Magnetic field sensor][a_magnetic_field_sensor]             | Continuous                | [DeviceMotion magneticField][ios_dm_magnetic_field]           | Continuous                           |
| Gyroscope                     | Gyroscope                                                                   | [Gyroscope][a_gyroscope]                                     | Continuous                | [DeviceMotion rotationRate][ios_dm_rotation_rate]             | Continuous                           |
| Heart Rate Sensor             |                                                                             | [Heart Rate][a_heart_rate]                                   | On-change                 | TODO                                                          |                                      |
| Ambient Light Sensor          |                                                                             | [Light][a_light]                                             | On-change                 | TODO                                                          |                                      |
| Proximity Sensor              |                                                                             | [Proximity][a_proximity]                                     | On-change                 | TODO                                                          |                                      |
| Barometer                     | Barometer                                                                   | [Pressure][a_pressure]                                       | Continuous                | TODO                                                          |                                      |
| Altimeter                     | Barometer or GPS                                                            | [Pressure][a_pressure]                                       | Continuous                | [Altimeter][ios_altimeter]                                    | Continuous with unsettable frequency |
| Relative Humidity Sensor      |                                                                             | [Relative humidity][a_relative_humidity]                     | On-change                 | TODO                                                          |                                      |
| *Game rotation vector*        | Accelerometer, Gyroscope MUST NOT USE Magnetometer                          | [Game rotation vector][a_game_rotation_vector]               | Continuous                | TODO                                                          |                                      |
| *Geomagnetic rotation vector* | Accelerometer, Magnetometer, MUST NOT USE Gyroscope                         | [Geomagnetic rotation vector][a_geomagnetic_rotation_vector] | Continuous                | TODO                                                          |                                      |
| *Gravity*                     | Accelerometer, Gyroscope                                                    | [Gravity][a_gravity]                                         | Continuous                | [gravity][ios_gravity]                                        | Continuous                           |
| *Gyroscope uncalibrated*      | Gyroscope                                                                   | [Gyroscope uncalibrated][a_gyroscope_uncalibrated]           | Continuous                | [GyroData rotationRate][ios_gyrodata_rotation_rate]           | Continuous                           |
| *Linear acceleration*         | Accelerometer, Gyroscope (if present) or Magnetometer (if gyro not present) | [Linear acceleration][a_linear_acceleration]                 | Continuous                | [DeviceMotion userAcceleration][ios_dm_user_acceleration]     | Continuous                           |
| *Magnetic field uncalibrated* | Magnetometer                                                                | [Magnetic field uncalibrated][a_magnetic_field_uncalibrated] | Continuous                | [Magnetometer magneticField][ios_magnetometer_magnetic_field] | Continuous                           |
| *Rotation vector*             | Accelerometer, Magnetometer, AND (when present) _Gyroscope_                 | [Rotation vector][a_rotation_vector]                         | Continuous                | [DeviceMotion attitude][ios_dm_attitude]                      | Continuous                           |
| Pedometer                     | Accelerometer                                                               | [Step counter][a_step_counter]                               | On-change                 | TODO                                                          |                                      |

[a_location]: http://developer.android.com/reference/android/location/package-summary.html
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
[a_step_counter]: https://source.android.com/devices/sensors/sensor-types.html#step_counter

[ios_device_motion]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMDeviceMotion_Class/index.html
[ios_accelerometer_acceleration]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMAccelerometerData_Class/index.html#//apple_ref/c/tdef/CMAcceleration
[ios_gyrodata_rotation_rate]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMGyroData_Class/index.html#//apple_ref/occ/instp/CMGyroData/rotationRate
[ios_dm_rotation_rate]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMDeviceMotion_Class/index.html#//apple_ref/occ/instp/CMDeviceMotion/rotationRate
[ios_dm_magnetic_field]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMDeviceMotion_Class/index.html#//apple_ref/occ/instp/CMDeviceMotion/magneticField
[ios_magnetometer_magnetic_field]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMMagnetometerData_Class/#//apple_ref/occ/instp/CMMagnetometerData/magneticField
[ios_dm_user_acceleration]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMDeviceMotion_Class/index.html#//apple_ref/occ/instp/CMDeviceMotion/userAcceleration                             
[ios_dm_attitude]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMDeviceMotion_Class/index.html#//apple_ref/occ/instp/CMDeviceMotion/magneticField
[ios_gravity]: https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CMDeviceMotion_Class/index.html#//apple_ref/occ/instp/CMDeviceMotion/gravity
[ios_altimeter]: https://developer.apple.com/library/prerelease/ios/documentation/CoreMotion/Reference/CMAltimeter_class/