FROM node:12-alpine as base

RUN apk add bash

WORKDIR /var/build

FROM base as prereq

COPY package.json .

RUN npm i --only=production

FROM prereq as development

COPY . /
COPY /services/api/ts*.json services/api/server/
COPY /services/player/ts*.json services/player/server/

RUN npm run bootstrap

