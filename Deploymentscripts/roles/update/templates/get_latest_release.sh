#!/bin/bash

curl --silent "https://api.github.com/repos/$1/releases/latest" | # Get latest release from GitHub api
  grep '"tag_name":' |                                            # Get tag line
  sed -E 's/.*"([^"]+)".*/\1/'                                    # Pluck JSON value

# Usage
# $ get_latest_release "smilo-platform/go-smilo"
# v1.8.2.2
