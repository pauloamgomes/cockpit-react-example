#!/bin/bash

cd docker
clear
echo "Starting docker-sync and docker-compose..."
docker-sync start && docker-compose up -d
clear
echo
echo "Done. Cockpit docker instance running!"
echo
echo " http://cockpit-example.docker.localhost"
echo
exit
