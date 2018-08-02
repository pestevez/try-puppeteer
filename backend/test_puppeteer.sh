#!/bin/bash

readonly USAGE="Usage: test_puppeteer.sh"

echo "Testing in Puppeteer..."

# set -x # debug on
docker run -i --rm --cap-add=SYS_ADMIN \
  --name puppeteer-chrome puppeteer-chrome-linux \
  yarn test
# set +x # debug off
