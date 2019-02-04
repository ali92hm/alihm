#####################
#  Build container  #
#####################
FROM node:dubnium as build

WORKDIR /usr/src/

COPY package.json .
RUN npm install
COPY . .
RUN npm run test
RUN npm run build

#####################
# Publish container #
#####################
FROM node:dubnium-alpine as publish

LABEL maintainer="Ali Hajimirza <ali@alihm.net>"

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/dist/

COPY package.json .
RUN npm install
COPY server server
COPY --from=build /usr/src/dist client

CMD ["npm", "start"]
