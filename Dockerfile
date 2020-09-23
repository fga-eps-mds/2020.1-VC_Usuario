FROM node:12.18.4-alpine 

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8000

CMD ["npm", "start"]  