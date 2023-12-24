FROM node:21

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .

RUN npm install -g knex

# WORKDIR /usr/src/app/apps/cocaines/src/infrastructure/db/postgres/knex
# RUN npx knex migrate:make migration

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "start:dev", "cocaines"]
