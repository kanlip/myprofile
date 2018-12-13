FROM node:alpine

WORKDIR /app

RUN npm -g install yarn 

COPY package.json .

COPY . .

CMD ["yarn","dev"]