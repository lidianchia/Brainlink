FROM node:22-alpine

LABEL org.opencontainers.image.authors="ittuann@outlook.com"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk update && apk add --no-cache \
    && rm -rf /var/cache/apk/*

RUN npm install -g pnpm

COPY . /app

WORKDIR /app

RUN pnpm install --frozen-lockfile

# Build
RUN pnpm build

EXPOSE 3000

ENTRYPOINT ["pnpm", "serve"]
