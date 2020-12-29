FROM node:14.15.3

WORKDIR /app
COPY package.json /app/package.json
RUN npm i --registry=https://registry.npm.taobao.org
COPY . /app
# ENV BASE_URL=api:8360
RUN npm run build
EXPOSE 8004
CMD [ "npm", "start" ]