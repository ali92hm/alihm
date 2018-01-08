FROM node:carbon-alpine

LABEL maintainer="Ali Hajimirza <ali@alihm.net>"

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/

COPY package.json .
RUN npm install

COPY server server
COPY dist client

CMD npm start
