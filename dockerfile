# Build stage
FROM cgr.dev/chainguard/node:latest-dev AS build

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

# Production stage
FROM cgr.dev/chainguard/nginx

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080
