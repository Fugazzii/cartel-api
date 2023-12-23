#!/bin/bash
set -e

npm run wait-for-db

npx knex migrate:latest

exec npm run start:dev cocaines
