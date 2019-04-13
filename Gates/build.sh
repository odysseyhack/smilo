#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

npm i
ionic build --prod

docker build -t klm/gate:latest -t klm/gate:latest .

# Tag for upload to Amazon
docker tag klm/gate:latest 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:latest

# Upload to amazon
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:latest
