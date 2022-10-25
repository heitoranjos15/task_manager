FROM node:14 as base

RUN mkdir /app && chown -R node:node /app

WORKDIR /app

COPY package.json package-lock.json* ./

RUN \
      npm install --silent \
      && npm cache clean --force 
COPY . .
USER node
