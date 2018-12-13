FROM node:alpine as builder 

WORKDIR /app

RUN npm -g install yarn
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

CMD ["yarn", "start"]

