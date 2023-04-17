
FROM node:18-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

FROM base as builder
WORKDIR /usr/src/app
# copy .env.example as .env to the release build
COPY . .
RUN  pnpm install
COPY .env.example ./.env
RUN pnpm build

FROM base as deploy
WORKDIR /usr/src/app
ENV NODE_ENV "production"
ENV PORT 3000
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]

# https://stackoverflow.com/questions/66127933/cloud-run-failed-to-start-and-then-listen-on-the-port-defined-by-the-port-envi
# Build a local development environment using the below command
# `docker build ./ --platform linux/amd64 -t asia.gcr.io/petchdev/petchdev`