#!/bin/sh

rm -rf dist && \
mkdir -p dist && \
find out -type f -name "nanokvm-usb-desktop-*.zip" -exec mv {} dist/ \; && \
rm -rf out