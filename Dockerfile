FROM node:10-alpine as builder

ADD . /usr/src/explorer
WORKDIR /usr/src/explorer

RUN npm install && \
    npm run build
    
FROM nginx:alpine
COPY --from=builder /usr/src/explorer/dist /usr/share/nginx/html
