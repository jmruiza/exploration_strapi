# Exploration Strapi

:point_right: Based in the [official strapi documentation](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project). 

1. Run the installation script:

```bash
npx create-strapi-starter my-project gatsby-blog
```
```bash
yarn create strapi-starter my-project gatsby-blog
```

During the installation, when terminal asks _Choose your installation type:_ select the default ```Quickstart (recommended)``` option by pressing Enter. 

When finish the installation, run:

## Backend 

```bash
cd ./my-project/backend && npm install && npm start
```
```bash
cd ./my-project/backend && yarn install && yarn start
```
For run backend in [http://localhost:1337/](http://localhost:1337/).

For the first time run you must create your admin credentials.

If the Strapi server is not already running, in your terminal run:

```bash
cd ./my-project/backend && npm run develop
```
```bash
cd ./my-project/backend && yarn develop
```

## Frontend 

```bash
cd ./my-project/frontend && npm install && npm start
```
```bash
cd ./my-project/frontend && yarn install && yarn start
```
For run frontend in [http://localhost:1337/](http://localhost:8000/)

