#!/usr/bin/env bash
set -e

source ./scripts/include/vars.sh

set HUGO_ENV=production
hugo --minify --buildFuture --cleanDestinationDir --destination $DIST_DIR