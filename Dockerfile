FROM node:10-alpine

ADD . /usr/src/explorer
WORKDIR /usr/src/explorer

RUN npm install
ENTRYPOINT npm run build
