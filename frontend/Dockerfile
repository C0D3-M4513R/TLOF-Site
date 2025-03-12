FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginxinc/nginx-unprivileged:latest as production-stage
USER 0
RUN mkdir /app
USER $UID
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
