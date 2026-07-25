FROM cgr.dev/chainguard/node:latest-dev AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM cgr.dev/chainguard/nginx

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
