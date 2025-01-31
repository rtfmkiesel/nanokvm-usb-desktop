#!/bin/sh

URL="https://cdn.sipeed.com/nanokvm/NanoKVM-USB.zip"

curl -s -fsSL "$URL" -o /tmp/dist.zip && \
unzip -o -q /tmp/dist.zip -d .

# Adjust some URLs
perl -i -pe 's/\/assets/assets/g' NanoKVM-USB/index.html
perl -i -pe 's/\/sipeed\.ico/sipeed\.ico/g' NanoKVM-USB/index.html
perl -i -pe 's/\/sipeed\.ico/sipeed\.ico/g' NanoKVM-USB/assets/*.js