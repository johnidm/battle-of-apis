FROM node:21.7.3-alpine3.18

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8010

ENV HOST=0.0.0.0 PORT=8010

CMD [ "node", "index.js" ]
