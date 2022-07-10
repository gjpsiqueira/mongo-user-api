FROM node:alpine
WORKDIR /usr/src/app
COPY backend/package.json /usr/src/app

RUN npm install -g nodemon
RUN npm install

CMD [ "npm", "run", "start.dev" ]

