FROM node:8.0.0
MAINTAINER sampahcoding anasyarifah@gmail.com

# Create app directory
RUN mkdir -p /vue
WORKDIR /vue

EXPOSE 8081

#COPY package.json .
#RUN npm i --no-optional && npm dedupe
