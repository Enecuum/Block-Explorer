FROM node:10-alpine as builder

ADD . /usr/src/explorer
WORKDIR /usr/src/explorer

ARG API_URL

RUN npm install && \
    API_URL=${API_URL} && \
    APP="https://github.com/Enecuum/AndroidApp/raw/Demo-Protocol/ENQtestnetalpha.apk" && \
    npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/explorer/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
EXPOSE 80
