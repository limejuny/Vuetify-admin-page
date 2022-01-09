FROM node:latest as builder

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

FROM nginx:latest

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .

CMD ["nginx", "-g", "daemon off;"]
