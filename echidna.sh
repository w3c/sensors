#!/bin/bash

: ${W3C_USERNAME:?"ENV VAR W3C_USERNAME is not set."}
: ${W3C_PASSWORD:?"ENV VAR W3C_PASSWORD is not set."}

DECISION="https://lists.w3.org/Archives/Public/public-device-apis/2015Oct/att-0037/minutes-2015-10-15.html#item05"

# use --force option to allow building the spec despite not having a level.
output=$(bikeshed --force echidna --u $W3C_USERNAME --p $W3C_PASSWORD  --d $DECISION --md-status=WD --self-contained)
