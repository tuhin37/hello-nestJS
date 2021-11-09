build-prod: 
	docker build --no-cache -t hello -f ./build/Dockerfile.prod .
build-dev: 
	docker build -t hello_dev -f ./build/Dockerfile.dev .
run-prod:
	docker run --rm -p 10000:7000 -it hello
run-dev:
	docker run --rm -p 10000:7000 -it hello_dev