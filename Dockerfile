FROM node:8.5.0-alpine

LABEL maintainer="Ali Hajimirza <ali@alihm.net>"

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/

COPY package.json .
RUN apk add --no-cache make gcc g++ python && \
    npm install && \
    apk del make gcc g++ python

COPY server server
COPY dist client

CMD npm start
