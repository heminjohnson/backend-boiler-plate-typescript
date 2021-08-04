# backend-boiler-plate-typescript

## About

This is backend boilerplate with mariadb database and typeORM

## Technical environment

- Runtime environment: Nodejs
- Framework: Express

## node and npm environment

```javascript
node version: 12
```

## Installation

Clone this repository and run

``` javascript
docker-compose up // This runs a mariadb database in your local machine 
```

``` javascript
npm install
```

``` javascript
npm run test
```

``` javascript
npm run build
```

``` javascript
npm run start
```

- http://localhost:5000

## Environment Variables

Keys and other sensitive details are not stored on Github. Before starting the app create a `.env` file and add the corresponding API KEYS:

```javascript
PORT = [PORT];
TYPEORM_CONNECTION = [TYPEORM_CONNECTION];
TYPEORM_HOST = [TYPEORM_HOST];
TYPEORM_USERNAME = [TYPEORM_USERNAME];
TYPEORM_PASSWORD = [TYPEORM_PASSWORD];
TYPEORM_DATABASE = [TYPEORM_DATABASE];
TYPEORM_PORT = [TYPEORM_PORT];
TYPEORM_SYNCHRONIZE = [TYPEORM_SYNCHRONIZE];
TYPEORM_LOGGING = [TYPEORM_LOGGING];
TYPEORM_ENTITIES = [TYPEORM_ENTITIES];
TEST_TYPEORM_HOST = [TEST_TYPEORM_HOST];
TEST_TYPEORM_USERNAME = [TEST_TYPEORM_USERNAME];
TEST_TYPEORM_PASSWORD = [TEST_TYPEORM_PASSWORD];
TEST_TYPEORM_DATABASE = [TEST_TYPEORM_DATABASE];
TEST_TYPEORM_PORT = [TEST_TYPEORM_PORT];
```

Commit messages follow the pattern:

```javascript
feat: add new feature XY
docs: add new documentation
test: add missing test
fix: add bugfix for feature XY
refactor: change structure of XY
chore: initial commit
build: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: changes to our CI configuration files and scripts (example scopes: CircleCI, BrowserStack, SauceLabs, CloudFoundry)
```

## Dependencies

This project is build on Node version 12.3.0 and requires node 12.x or higher.
