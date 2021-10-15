#!/usr/bin/env bash
set -e

source ./scripts/include/vars.sh

aws s3 sync $DIST_DIR s3://alihm.net --acl public-read --delete
