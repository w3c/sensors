#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

bikeshed spec index.bs
bikeshed spec usecases.bs

if [ -d out ]; then
  echo Copy the generated spec into out/
  cp index.html out/index.html
  cp usecases.html out/usecases.html
  cp -R images/ out/images/
fi