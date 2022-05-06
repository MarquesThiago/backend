FROM node:16.13.0-alpine

RUN mkdir /greentechs
WORKDIR /greentechs
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]
