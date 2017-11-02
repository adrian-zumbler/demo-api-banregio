FROM node:6.9.2

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

ADD . /usr/src/app

RUN npm install



