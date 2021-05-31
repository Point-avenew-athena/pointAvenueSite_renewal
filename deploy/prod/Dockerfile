FROM node:14.15.1-stretch-slim

RUN mkdir -p /home/node/app
ADD . /home/node/app
WORKDIR /home/node/app
RUN npm install -only=production

CMD ["npm", "run", "prod"]

