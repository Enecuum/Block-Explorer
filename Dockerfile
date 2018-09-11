FROM node:10-alpine as builder

ADD . /usr/src/explorer
WORKDIR /usr/src/explorer

ENV API_URL="ws://genesis-bootstrap.enecuum.com:1554"

RUN npm install && \
    npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/explorer/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
EXPOSE 80
