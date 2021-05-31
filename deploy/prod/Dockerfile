FROM node:14.15.1-stretch-slim

RUN mkdir -p /home/node/app
ADD ./package.json /home/node/app/package.json
ADD ./server.js /home/node/app/server.js
ADD ./.env /home/node/app/.env
ADD ./src /home/node/app/src
ADD ./public/css /home/node/app/public/css
ADD ./public/font /home/node/app/public/font
ADD ./public/js /home/node/app/public/js
ADD ./routers /home/node/app/routers
WORKDIR /home/node/app
RUN npm install -only=production

CMD ["npm", "run", "prod"]

