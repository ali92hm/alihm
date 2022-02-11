#!/usr/bin/env bash
set -e

source ./scripts/include/vars.sh

export HUGO_ENV=production
hugo --minify --buildFuture --cleanDestinationDir --destination $DIST_DIR
