FROM node:20-alpine as base

RUN apk add bash

WORKDIR /var/build

FROM base as prereq

COPY package.json .

RUN npm i --only=production

FROM prereq as development

COPY . /

RUN npm run bootstrap

