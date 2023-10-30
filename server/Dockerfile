#  Dockerfile for Node Express Backend

FROM node:21-alpine
RUN mkdir -p /burger-server
WORKDIR /burger-server
COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .
EXPOSE 5050

CMD ["pnpm","run", "dev"]