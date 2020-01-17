FROM node:10-alpine

COPY . .

RUN yarn install

EXPOSE 9000

ENV NODE_ENV=production

RUN yarn build

CMD ["yarn", "start"]
