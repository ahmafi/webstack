# syntax=docker/dockerfile:1

FROM strapi/base:14 AS deps
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci

FROM strapi/base:14 AS builder
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM strapi/base:14 AS runner
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 1337
ENV PORT 1337
CMD ["npm", "start"]
