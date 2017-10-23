FROM node:6.9.2

WORKDIR /usr/src/app

RUN npm install

ADD . /usr/src/app

