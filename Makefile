SHELL= /bin/bash

migrate:
	docker-compose run api npx sequelize db:create
	docker-compose run api npx sequelize db:migrate
	docker-compose run api npx sequelize db:seed:all

build_app:
	docker-compose up -d --build

start_app:
	docker-compose run api npm run dev
