FROM node:21-alpine
RUN mkdir -p /burger-client-admin
WORKDIR /burger-client-admin
COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .
EXPOSE 5100

CMD ["pnpm", "run", "dev"]