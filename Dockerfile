FROM node:12.18.3

WORKDIR /app
COPY package.json /app/package.json
RUN npm i
COPY . /app
EXPOSE 8004
CMD [ "npm", "start" ]