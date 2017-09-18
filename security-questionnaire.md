# [Security and Privacy Self-Review Questionnaire](https://w3ctag.github.io/security-questionnaire/)

---

| **Question / API**                                                                                          | [GenericSensor] | [Accelerometer] | [Gyroscope] | [Magnetometer] | [OrientationSensor] | [AmbientLightSensor] | [ProximitySensor] |
|:------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| [3.1 Does this specification deal with personally-identifiable information?]                                | Indirectly, sensor readings can be used to [identify user].      | Indirectly    | Indirectly    | Indirectly    | Indirectly    | Indirectly    | Unknown       |
| [3.2 Does this specification deal with high-value data?]                                                    | Indirectly, sensor readings can be used to [infer user input].   | Indirectly    | Indirectly    | Indirectly    | Indirectly    | Indirectly    | Unknown       |
| [3.3 Does this specification introduce new state for an origin that persists across browsing sessions?]     | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.4 Does this specification expose persistent, cross-origin state to the web?]                             | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.5 Does this specification expose any other data to an origin that it doesn’t currently have access to?]  | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.6 Does this specification enable new script execution/loading mechanisms?]                               | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.7 Does this specification allow an origin access to a user’s location?]                                  | Depends on concrete sensor class.                                | Indirectly    | No            | Indirectly    | Indirectly    | Day / Night?  | Unknown       |
| [3.8 Does this specification allow an origin access to sensors on a user’s device?]                         | Yes                                                              | Yes           | Yes           | Yes           | Yes           | Yes           | Yes           |
| [3.9 Does this specification allow an origin access to aspects of a user’s local computing environment?]    | Yes. The API provides means to check what sensors are available. | Yes           | Yes           | Yes           | Yes           | Yes           | Yes           |
| [3.10 Does this specification allow an origin access to other devices?]                                     | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.11 Does this specification allow an origin some measure of control over a user agent’s native UI?]       | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.12 Does this specification expose temporary identifiers to the web?]                                     | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.13 Does this specification distinguish between behavior in first-party and third-party contexts?]        | No                                                               | No            | No            | No            | No            | No            | No            |
| [3.14 How should this specification work in the context of a user agent’s "incognito" mode?]                | Same behavior regardless of mode.                                | Same behavior | Same behavior | Same behavior | Same behavior | Same behavior | Same behavior |
| [3.15 Does this specification persist data to a user’s local device?]                                       | No, the specification does not persist data on local device      | No            | No            | No            | No            | No            | No            |
| [3.16 Does this specification have a "Security Considerations" and "Privacy Considerations" section?]       | Yes                                                              | Yes           | Yes           | Yes           | Yes           | Yes           | Yes           |
| [3.17 Does this specification allow downgrading default security characteristics?]                          | No                                                               | No            | No            | No            | No            | No            | No            |

[GenericSensor]: https://w3c.github.io/sensors/
[Accelerometer]: https://w3c.github.io/accelerometer/
[Gyroscope]: https://w3c.github.io/gyroscope/
[Magnetometer]: https://w3c.github.io/magnetometer/
[OrientationSensor]: https://w3c.github.io/orientation-sensor/
[AmbientLightSensor]: https://w3c.github.io/ambient-light/
[ProximitySensor]: https://w3c.github.io/proximity/
[identify user]: https://w3c.github.io/sensors/#user-identifying
[infer user input]: https://w3c.github.io/sensors/#keystroke-monitoring
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
