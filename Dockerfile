FROM node:latest

RUN yarn global add http-server
RUN yarn global add @vue/cli

WORKDIR /var/www/app

COPY . .

RUN yarn install --non-interactive
RUN yarn run build

EXPOSE 8080

CMD ["http-server", "dist"]