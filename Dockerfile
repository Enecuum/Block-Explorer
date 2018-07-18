FROM node:10-alpine

ADD . /usr/src/explorer
WORKDIR /usr/src/explorer

RUN npm install && \
    npm run build

EXPOSE 80 8081

ENTRYPOINT ["npm"]
CMD ["run", "start"]
