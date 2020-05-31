# node-kit

🐢🚀 A Node.js Kit with TypeScript, REST, TypeORM, PostgreSQL and awesome tools.

## Features

- Using TypeScript.
- Setup Babel, ESLint and Husky.
- Setup a basic RESTful API.
- Using TypeORM and PostgreSQL.
- Integrating Docker.

## Prepare

- [Docker](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## Usage

```sh
yarn

yarn start:dev
```

### Optional: run with 🐳 Docker

```sh
docker network create node-kit-net

docker run --name node-kit-db -it -p 5432:5432 --network=node-kit-net -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres postgres

docker build . -t 103cuong/node-kit

docker run --name node-kit -it -p 9000:9000 --network=node-kit-net --env-file ./.env 103cuong/node-kit
```

## Relative sources


- [node-graphql-kit](https://github.com/103cuong/node-graphql-kit) - 🧘🚀 A Node.js Kit with GraphQL, Prisma, PostgreSQL, MongoDB and awesome tools. ![GitHub stars](https://img.shields.io/github/stars/103cuong/node-graphql-kit?style=social)

- [node-boilerplate](https://github.com/103cuong/node-boilerplate) - 🌏🚀 A Node.js boilerplate with RESTful, GraphQL, Prisma, PostgreSQL and awesome tools. ![GitHub stars](https://img.shields.io/github/stars/103cuong/node-boilerplate?style=social)

- [node-rest-boilerplate](https://github.com/103cuong/node-rest-boilerplate) - 🌌🚀 A Node.js boilerplate with RESTful, Prisma, PostgreSQL and awesome tools. ![GitHub stars](https://img.shields.io/github/stars/103cuong/node-rest-boilerplate?style=social)

## Contributors

[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/0)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/0)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/1)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/1)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/2)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/2)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/3)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/3)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/4)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/4)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/5)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/5)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/6)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/6)[![](https://sourcerer.io/fame/103cuong/103cuong/node-kit/images/7)](https://sourcerer.io/fame/103cuong/103cuong/node-kit/links/7)

## License

MIT © [103cuong](https://github.com/103cuong)
