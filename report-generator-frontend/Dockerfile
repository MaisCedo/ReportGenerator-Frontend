# Multi-stage docker file
# 1. ambiente node para rodar app React
# 2. stage intermediário para gerar arquivo de produção
# 3. implantação com nginx (webserver)

# 1. Dev
FROM node:16-alpine AS dev
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "dev"]

# 2. Build
FROM dev AS builder
# arquivo .env.local não deve ir para "produção"
RUN rm -f .env.local
RUN yarn build