FROM node:12-alpine

COPY . .

RUN yarn install

ENV NODE_ENV=production

RUN yarn build

EXPOSE 9000

CMD ["yarn", "start"]
