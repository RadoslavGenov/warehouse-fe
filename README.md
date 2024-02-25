# Warehouse Frontend

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs codegen to generate graphql schema types and hooks and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

This is a simple UI app, the app is organised with the following structure:

`/components` - has universal dumb components without business logic

`/constants` - global constants

`/layouts` - layouts for the app

`/pages` - every page/screem that is shown in the app

`/sections` - business logic components which are part of the pages

`/modals` - modal components with business logic
