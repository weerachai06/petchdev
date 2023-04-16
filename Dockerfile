
FROM node:18-alpine AS base
# https://stackoverflow.com/questions/66127933/cloud-run-failed-to-start-and-then-listen-on-the-port-defined-by-the-port-envi

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN  pnpm install

COPY . .
RUN pnpm build

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

CMD ["pnpm", "start"]

# Build on lodal development using command below
# `docker build ./ --platform linux/amd64 -t asia.gcr.io/petchdev/petchdev`