    docker ps

    docker exec -it postgres /bin/bash

# RODANDO O POSTGRES

docker run \
    --name postgres \
    -e POSTGRES_USER=hasselmann \
    -e POSTGRES_PASSWORD=admin \
    -e POSTGRES_DB=deliverman \
    -p 5432:5432 \
    postgres

    docker run \
        --name adminer \
        -p 8080:8080 \
        --link postgres:postgres \
        -d \
        adminer

# RODANDO O MONGODB

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -d \
    mongo:4

    docker run \
        --name mongoclient \
        -p 3000:3000 \
        --link mongodb:mongodb \
        -d \
        mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p admin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'hasselmann', pwd: 'admin', roles: [{role: 'readWrite', db: 'herois'}]})"