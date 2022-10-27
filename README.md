# Task manager
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

- [Docker](https://docs.docker.com/engine/install)
- [docker-compose](https://www.digitalocean.com/community/tutorial_collections/how-to-install-docker-compose)

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
**Login**
```curl
curl --request POST \
  --url http://localhost:4000/login \
  --header 'Content-Type: application/json' \
  --data '{
	"username": "john",
	"password": "manager"
}'
```
**Create Task**
```curl
curl --request POST \
  --url http://localhost:4000/task \
  --header 'Authorization: Bearer {token}' \
  --header 'Content-Type: application/json' \
  --data '{
	"summary": "task teste",
	"date": "2022-02-02"
}'
```
**Edit employee task**
```curl
curl --request PUT \
  --url http://localhost:4000/employee/tasks \
  --header 'Authorization: Bearer {token}'
  --header 'Content-Type: application/json' \
  --data '{
	"summary": "task teste",
	"date": "2022-02-02"
}'
```

**Delete task**
```curl
curl --request DELETE \
  --url http://localhost:4000/employee/task/1 \
  --header 'Authorization: Bearer {token}'
```

**Employee Tasks**
```curl
curl --request GET \
  --url http://localhost:4000/employee/tasks \
  --header 'Authorization: Bearer {token}'
}'
```

**Employee task by id**
```curl
curl --request GET \
  --url http://localhost:4000/employee/task \
  --header 'Authorization: Bearer {token}'
}'
```

**All tasks**
```curl
curl --request GET \
  --url http://localhost:4000/employee/allTasks \
  --header 'Authorization: Bearer {token}'
}'
```
  
### RabbitMQ
To see the messages sent to queue, after the build you can access the local address: 

http://localhost:15672

Credentials:
```
username: guest
password: guest
```
