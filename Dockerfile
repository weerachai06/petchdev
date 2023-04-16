
FROM node:18-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

FROM base as builder
WORKDIR /usr/src/app
COPY . .
RUN  pnpm install
RUN pnpm build

FROM base as deploy
WORKDIR /usr/src/app

ENV NODE_ENV "production"
ENV PORT 3000
COPY --from=builder /usr/src/app/ .

EXPOSE 3000

CMD ["pnpm", "start"]

# https://stackoverflow.com/questions/66127933/cloud-run-failed-to-start-and-then-listen-on-the-port-defined-by-the-port-envi
# Build on lodal development using command below
# `docker build ./ --platform linux/amd64 -t asia.gcr.io/petchdev/petchdev`