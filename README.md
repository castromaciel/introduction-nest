<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

Introduction to Nest

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Folder Structure

```bash
project-name/
├── dist                          # Compiled/bundled output of the project.
├── node_modules                  # Third party libraries
└── src                           # Root directory of the source code.
|  ├── app.controller.spec.ts     # Unit tests for the app controller
|  ├── app.controller.ts          # Definition of the app controller
|  ├── app.module.ts              # Main module of the application
|  ├── app.service.ts             # Definition of the app services
|  ├── main.ts                    # Entry point of the app
├── test                          # Test all functionalities
├── .eslintrc.js                  # Standard configuration for linter
├── .gitignore                    # Files ignored at publish into github
├── .prettierrc                   # Config file for prettier
├── nest-cli.json                 # Config file for Nest CLI 
├── package.json                  # Metadata and configuration file for the project
├── README.md                     # Doc file for the project
├── tsconfig.build.json           # TypeScript configuration for building the projec 
├── tsconfig.json                 # Main TypeScript configuration file
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
