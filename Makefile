SHELL= /bin/bash

migrate:
	docker-compose run api npx sequelize db:create
	docker-compose run api npx sequelize db:migrate
