#!/bin/bash

ionic build --prod

docker build -t smilo/klm-gate .
