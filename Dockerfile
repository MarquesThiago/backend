FROM node:16.13.2-slim
WORKDIR /
COPY  package*.json ./
RUN npm install

COPY . .

EXPOSE 3030
CMD  ['npm" , "start"]