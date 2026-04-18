.PHONY: dev build start lint fmt test clean install

## Install dependencies
install:
	npm install

## Start development server
dev:
	npm run dev

## Build for production
build:
	npm run build

## Start production server
start:
	npm run start

## Run linter
lint:
	npm run lint

## Auto-fix lint issues
fmt:
	npm run lint -- --fix

## Run all checks (lint + build)
test: lint build

## Remove build artifacts and dependencies
clean:
	rm -rf .next node_modules
