FROM node:alpine
RUN mkdir app
WORKDIR app
ADD ./OmdbBack/package.json package.json
RUN npm install
ADD ./OmdbBack/app.js app.js

EXPOSE 3000
