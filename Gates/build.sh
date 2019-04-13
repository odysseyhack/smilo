#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

npm i

GATE_TYPE="Gate 1" NODE_ENDPOINT=node1.klm.smilo.network:3000 ionic build
docker build -t klm/gate:node1 -t klm/gate:latest .

GATE_TYPE="Gate 2" NODE_ENDPOINT=node2.klm.smilo.network:3000 ionic build
docker build -t klm/gate:node2 -t klm/gate:latest .

GATE_TYPE="Gate 3" NODE_ENDPOINT=node3.klm.smilo.network:3000 ionic build
docker build -t klm/gate:node3 -t klm/gate:latest .

GATE_TYPE="Gate 4" NODE_ENDPOINT=node4.klm.smilo.network:3000 ionic build
docker build -t klm/gate:node4 -t klm/gate:latest .

# Tag for upload to Amazon
docker tag klm/gate:node1 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node1
docker tag klm/gate:node2 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node2
docker tag klm/gate:node3 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node3
docker tag klm/gate:node4 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node4

# Upload to amazon
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node1
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node2
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node3
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/klm/gate:node4
