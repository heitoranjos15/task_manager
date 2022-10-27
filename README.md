# task_manager
Challenge provided by Sword Health

# Summary
- [Folder structure](#folder-structure)
- [Installation](#Installation)
- [Node dependencies](#node-dependencies)
- [Docker & docker-compose](#docker)
- [Build Application](#build-application)
- [Run Application](#run-application)
- [Testing](#testing)
- [Routes](#routes)
- [RabbitMQ](#rabbitmq)


## Folder structure
```
    .
    ├── src            # Application main code
        |── core       # Internal rules to solve the problems
        |── database   # Migrations,seeders, models and repository
        |── exception  # Custom exception to help the API responses
        |── helper     # Helper function in general
        └── server     # HTTP configuration, middlewares and external service (message-queue)
    └── test           # Unit tests
```

## Instalation
This application are created with NodeJS, if you don't have a NodeJS I suggested this link (https://nodejs.org/en/download/) to help you download.

Then, follow this steps:

## Clone repository
```bash
$ git clone  https://github.com/heitoranjos15/task_manager
```

### Node dependencies
Open a terminal and move to the directory you install this application.

Then run this command:
```bash
$ npm i
```

### <a name="docker"></a> Docker & docker-compose
You need to install docker and docker-compose to run the application locally.

Docker: (https://docs.docker.com/engine/install)
docker-compose: (https://www.digitalocean.com/community/tutorial_collections/how-to-install-docker-compose)

### Build application
After you had installed Docker and docker-compose, you'll be able to run:
```bash
$ make build_app
```

### <a name="migration"></a> Migration & seeders
To create database to run test locally:
```bash
$ make migration
```
### Run application
```bash
$ make start_app
```

### Testing
You can run the unit test, with this command:
```bash
$ npm run test
```

### Routes
- POST localhost:4000/login

**Bearer authentication required:**
- POST localhost:4000/task
- POST localhost:4000/employee
- GET  localhost:4000/employee/tasks
- GET  localhost:4000/employee/task/:id
- GET  localhost:4000/employee/allTask
- PUT  localhost:4000/employee/task/:id
- DELETE  localhost:4000/employee/task/:id



### RabbitMQ
To see the messages sent to queue, after the build you can access the local address: http://localhost:15672

Username and password are both with value `guest`
