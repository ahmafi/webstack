## Webstack

## Development
1. Fill the `.env.dev` file with proper values with the help of the `.env.sample` as a base.
2. Build the containers using docker compose:
```shell
docker compose \
  -f docker-compose.yaml \
  -f docker-compose.dev.yaml \
  -p webstack-dev \
  --env-file ./.env.dev \
  build
```
3. Start the containers using docker compose:
```shell
docker compose \
  -f docker-compose.yaml \
  -f docker-compose.dev.yaml \
  -p webstack-dev \
  --env-file ./.env.dev \
  up
```

## Production
With the help of docker compose we can start all containers in a single server.
1. Fill the `.env.prod` file with proper values with the help of the `.env.sample` as a base.
2. Build the containers using docker compose:
```shell
docker compose \
  -f docker-compose.yaml \
  -f docker-compose.prod.yaml \
  -p webstack-prod \
  --env-file ./.env.prod \
  build
```
3. Start the containers using docker compose:
```shell
docker compose \
  -f docker-compose.yaml \
  -f docker-compose.prod.yaml \
  -p webstack-prod \
  --env-file ./.env.prod \
  up -d
```
