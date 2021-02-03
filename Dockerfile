FROM registry.cn-zhangjiakou.aliyuncs.com/cyyjs/node:14.15.4-alpine

WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install --production
COPY .nuxt /app/.nuxt
EXPOSE 8004
CMD [ "yarn", "start" ]