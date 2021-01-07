FROM node:14.15.3

WORKDIR /app
COPY package.json /app/package.json
RUN npm i --production --registry=https://registry.npm.taobao.org
COPY .nuxt /app/.nuxt
EXPOSE 8004
CMD [ "npm", "start" ]