# Warehouse Frontend

Frontend client side warehouse application, which uses technologies:

`React JS`
`Apollo Graphql Client`
`Ant Design`
`Typescript`

## Prerequisites

```sh
cp .env.dist .env
```

## Start project

### `npm install`

In the project directory, you can run:

### `npm start`

This runs graphql codegen to generate graphql schema types and hooks && runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

This is a simple UI app, the app is organised with the following structure:

`/components` - has universal dumb components without business logic

`/constants` - global constants

`/layouts` - layouts for the app

`/pages` - every page/screem that is shown in the app

`/sections` - business logic components which are part of the pages

`/modals` - modal components with business logic
