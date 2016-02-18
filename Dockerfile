# jimgong92/jimmyg-site:0.1.0

# Pull base image
FROM node:5.1.1

# File Author / Maintainer
MAINTAINER Jimmy Gong <gong.jim@gmail.com>

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /data && cp -a /tmp/node_modules /data

RUN npm install

COPY . /data
WORKDIR /data

EXPOSE 3000

ENTRYPOINT bash ./boot.sh
