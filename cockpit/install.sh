#!/bin/bash

DOCROOT="www"

if [ -d "cockpit-next" ]; then
  echo "Cockpit already installed! Remove the cockpit-next folder first if you want to reinstall."
  exit 1
fi

# cockpit cms
echo "Downloading Cockpit from https://github.com/agentejo/cockpit/archive/next.zip"
wget -qO- -O next.zip https://github.com/agentejo/cockpit/archive/next.zip \
  && unzip -q next.zip \
  && rm next.zip \
  && mv cockpit-next $DOCROOT
echo "Done!"
# multiple collection link addon
echo "Downloading MultipleCollectionLink from https://github.com/pauloamgomes/Cockpit-MultipleCollectionLink/archive/1.1.zip"
wget -qO- -O multiplecollectionlink.zip https://github.com/pauloamgomes/Cockpit-MultipleCollectionLink/archive/1.1.zip \
  && unzip -q multiplecollectionlink.zip \
  && rm multiplecollectionlink.zip \
  && mv Cockpit-MultipleCollectionLink-1.1 $DOCROOT/addons/MultipleCollectionLink
echo "Done!"
# install example sqlite data
echo "Installing example data"
cp -r example/data $DOCROOT/storage
cp -r example/collections $DOCROOT/storage
cp -r example/uploads $DOCROOT/storage
chmod 0755 $DOCROOT/storage
# restore config
cp -r example/config $DOCROOT/
chmod 0755 $DOCROOT/config
chmod 0666 $DOCROOT/config/config.yaml
echo "Done!"
sleep 1
echo
echo
echo "Starting cockpit docker instance.."
echo
./start.sh

