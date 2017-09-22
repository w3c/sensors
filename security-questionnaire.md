# [Security and Privacy Self-Review Questionnaire] for [Generic Sensor API]

Answers to the [questionnaire][Security and Privacy Self-Review Questionnaire] for
[Generic Sensor API] extension specifications can be found in corresponding repositories:

- [Accelerometer]
- [Gyroscope]
- [Magnetometer]
- [OrientationSensor]
- [AmbientLightSensor]
- [ProximitySensor]

## [3.1 Does this specification deal with personally-identifiable information?]

Yes, but not directly. Concrete sensor specifications require user [permissions] and an
assesment of applicable [mitigation strategies] to address [potential risks][user-identification].
For more information, please see: [Security and Privacy section][security-and-privacy].

## [3.2 Does this specification deal with high-value data?]

Yes, but not directly.

>Sensor readings are explicitly flagged by the Secure Contexts specification
[[POWERFUL-FEATURES]] as a high-value target for network attackers. Thus all interfaces defined by
this specification or extension specifications are only available within a secure context.

Indirectly, sensor readings of a concrete sensor can be used to [infer user input].

## [3.3 Does this specification introduce new state for an origin that persists across browsing sessions?]

No.

## [3.4 Does this specification expose persistent, cross-origin state to the web?]

No.

## [3.5 Does this specification expose any other data to an origin that it doesn’t currently have access to?]

No.

## [3.6 Does this specification enable new script execution/loading mechanisms?]

No.

## [3.7 Does this specification allow an origin access to a user’s location?]

Not directly; concrete sensor specifications, ie. "Geolocation Sensor" require [user permissions][permissions]
and implementation of applicable [mitigation strategies] to avoid [potential risks][location-tracking].

## [3.8 Does this specification allow an origin access to sensors on a user’s device?]

Yes; concrete sensor specifications require user permissions to mitigate potential exposure and/or privacy issues.

See: [Security & Privacy][security-and-privacy] and [Mitigation strategies] sections.

## [3.9 Does this specification allow an origin access to aspects of a user’s local computing environment?]

Yes. If user agent has [permission][permissions] to access concrete sensor, the API provides means to check whether the sensor is available within user’s local computing environment.

## [3.10 Does this specification allow an origin access to other devices?]

No; however it is acknowledged that:

> Sensors can potentially be used in cross-device linking and tracking of a user.

See: [Security & Privacy][security-and-privacy] and [Mitigation strategies] sections.

## [3.11 Does this specification allow an origin some measure of control over a user agent’s native UI?]

No.

## [3.12 Does this specification expose temporary identifiers to the web?]

No.

## [3.13 Does this specification distinguish between behavior in first-party and third-party contexts?]

No.

## [3.14 How should this specification work in the context of a user agent’s "incognito" mode?]

Specification does not restrict access to a particular mode. However, this can be revisited when
[privacy mode] would be formally specified.

## [3.15 Does this specification persist data to a user’s local device?]

No.

## [3.16 Does this specification have a "Security Considerations" and "Privacy Considerations" section?]

Yes.

See: [Security & Privacy][security-and-privacy] section.

## [3.17 Does this specification allow downgrading default security characteristics?]

No.

<!--- References -->
[mitigation strategies]: https://w3c.github.io/sensors/#mitigation-strategies
[user-identification]: https://w3c.github.io/sensors/#user-identifying
[security-and-privacy]: https://w3c.github.io/sensors/#security-and-privacy
[permissions]: https://w3c.github.io/sensors/#permissions
[POWERFUL-FEATURES]: https://w3c.github.io/webappsec-secure-contexts/
[infer user input]: https://w3c.github.io/sensors/#keystroke-monitoring
[location-tracking]: https://w3c.github.io/sensors/#location-tracking
[privacy mode]: https://gist.github.com/mnot/96440a5ca74fcf328d23#privacy-mode
[Security and Privacy Self-Review Questionnaire]: https://w3ctag.github.io/security-questionnaire/

[3.1 Does this specification deal with personally-identifiable information?]: https://w3ctag.github.io/security-questionnaire/#pii
[3.2 Does this specification deal with high-value data?]: https://w3ctag.github.io/security-questionnaire/#credentials
[3.3 Does this specification introduce new state for an origin that persists across browsing sessions?]: https://w3ctag.github.io/security-questionnaire/#persistent-origin-specific-state
[3.4 Does this specification expose persistent, cross-origin state to the web?]: https://w3ctag.github.io/security-questionnaire/#persistent-identifiers
[3.5 Does this specification expose any other data to an origin that it doesn’t currently have access to?]: https://w3ctag.github.io/security-questionnaire/#other-data
[3.6 Does this specification enable new script execution/loading mechanisms?]: https://w3ctag.github.io/security-questionnaire/#string-to-script
[3.7 Does this specification allow an origin access to a user’s location?]: https://w3ctag.github.io/security-questionnaire/#location
[3.8 Does this specification allow an origin access to sensors on a user’s device?]: https://w3ctag.github.io/security-questionnaire/#sensors
[3.9 Does this specification allow an origin access to aspects of a user’s local computing environment?]: https://w3ctag.github.io/security-questionnaire/#local-device
[3.10 Does this specification allow an origin access to other devices?]: https://w3ctag.github.io/security-questionnaire/#remote-device
[3.11 Does this specification allow an origin some measure of control over a user agent’s native UI?]: https://w3ctag.github.io/security-questionnaire/#native-ui
[3.12 Does this specification expose temporary identifiers to the web?]: https://w3ctag.github.io/security-questionnaire/#temporary-id
[3.13 Does this specification distinguish between behavior in first-party and third-party contexts?]: https://w3ctag.github.io/security-questionnaire/#first-third-party
[3.14 How should this specification work in the context of a user agent’s "incognito" mode?]: https://w3ctag.github.io/security-questionnaire/#incognito
[3.15 Does this specification persist data to a user’s local device?]: https://w3ctag.github.io/security-questionnaire/#storage
[3.16 Does this specification have a "Security Considerations" and "Privacy Considerations" section?]: https://w3ctag.github.io/security-questionnaire/#considerations
[3.17 Does this specification allow downgrading default security characteristics?]: https://w3ctag.github.io/security-questionnaire/#relaxed-sop

[Generic Sensor API]: https://w3c.github.io/sensors/
[Accelerometer]: https://github.com/w3c/accelerometer/blob/gh-pages/security-questionnaire.md
[Gyroscope]: https://github.com/w3c/gyroscope/blob/gh-pages/security-questionnaire.md
[Magnetometer]: https://github.com/w3c/magnetometer/blob/gh-pages/security-questionnaire.md
[OrientationSensor]: https://github.com/w3c/orientation-sensor/blob/gh-pages/security-questionnaire.md
[AmbientLightSensor]: https://github.com/w3c/ambient-light/blob/gh-pages/security-questionnaire.md
[ProximitySensor]: https://github.com/w3c/proximity/blob/gh-pages/security-questionnaire.md
