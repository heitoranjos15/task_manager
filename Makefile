SHELL= /bin/bash

migrate:
	docker-compose run api npx sequelize db:create
	docker-compose run api npx sequelize db:migrate
	docker-compose run api npx sequelize db:seed:all

task_manager:
	docker-compose up -d --build
