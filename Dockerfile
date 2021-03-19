# 构建，输出构建后代码
FROM registry.cn-zhangjiakou.aliyuncs.com/cyyjs/node:14.15.4-alpine as build
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

# 拿到上步构建后的代码二次构建
FROM registry.cn-zhangjiakou.aliyuncs.com/cyyjs/node:14.15.4-alpine 
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install --production
COPY --from=build /app/.nuxt /app/.nuxt
EXPOSE 8004
CMD [ "yarn", "start" ]