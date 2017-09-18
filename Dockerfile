FROM node:8.5.0-alpine

LABEL maintainer="Ali Hajimirza <ali@alihm.net>"

ENV NODE_ENV=production
WORKDIR /usr/src/

COPY package.json .
RUN apk add --no-cache make gcc g++ python && \
    npm install --production && \
    apk del make gcc g++ python

COPY server server
COPY dist client

CMD npm start
