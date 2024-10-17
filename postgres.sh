#!/bin/bash

# Define the container name, PostgreSQL version, and necessary environment variables
CONTAINER_NAME="postgres"
POSTGRES_VERSION="latest"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="postgres"
POSTGRES_DB="postgres"
HOST_PORT=5432
CONTAINER_PORT=5432

# Check if the container is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container $CONTAINER_NAME..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Pull the latest PostgreSQL image if not available
echo "Pulling PostgreSQL image..."
docker pull postgres:$POSTGRES_VERSION

# Run the PostgreSQL container
echo "Starting PostgreSQL container..."
docker run -d \
    --name $CONTAINER_NAME \
    -e POSTGRES_USER=$POSTGRES_USER \
    -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
    -e POSTGRES_DB=$POSTGRES_DB \
    -p $HOST_PORT:$CONTAINER_PORT \
    -v pgdata:/var/lib/postgresql/data \
    postgres:$POSTGRES_VERSION

echo "
