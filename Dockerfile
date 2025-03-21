FROM node:lts-alpine3.20 AS base

WORKDIR /app

COPY ./package.json ./

# --------------------------------------------
# ----- Install the project dependencies -----
# --------------------------------------------
FROM base AS install

RUN npm install

# ----------------------------------
# ----- Build the static files -----
# ----------------------------------
FROM install as build

COPY ./ ./

RUN npm run build

# ------------------------------------
# ----- Release the static files -----
# ------------------------------------
FROM caddy:alpine as release

COPY --from=build /app/build ./
COPY ./caddy/Caddyfile /etc/caddy/Caddyfile
