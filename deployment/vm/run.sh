#!/bin/bash

docker run \
    -d \
    -p 3000:3000 \
    -e NODE_ENV=production \
    ali92hm/alihm \
