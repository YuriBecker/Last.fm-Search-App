[![Netlify Status](https://api.netlify.com/api/v1/badges/b27abb68-eb05-40d6-b10e-ed098156041e/deploy-status)](https://app.netlify.com/sites/lastfm-search/deploys)

# Last.fm Search App

### An app to search for information about artists and albums using the Last.fm public api.

### See online

- #### [App](https://lastfm-search.netlify.com)
- #### [Storybook](https://storybook-lastfm-search.netlify.com)

### Prerequisites

- Yarn or NPM
- Node.js

### Running the app

On the root folder, run:

```sh
$ yarn
$ yarn start
```

### Running the storybook

On the root folder, run:

```sh
$ yarn storybook
```

## Tests

- The projects have automatic Jest snapshot testing of the components with [StoryShots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core).
- It also has tests with [React Testing Library](https://github.com/testing-library/react-testing-library) with [Jest](https://github.com/facebook/jest).

## Running the tests

On the root folder, run:

```sh
$ yarn test
```

## Built With

- [Last.fm API](https://www.last.fm/api)- Last.fm Data API
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://github.com/ReactTraining/react-router) - Routing library
- [Material UI](https://material-ui.com/) - UI Components Framework
- [Firebase Authentication](https://firebase.google.com/docs/auth) - User Authentication Service
- [Axios](https://github.com/axios/axios) - HTTP Cliente
- [Redux](https://redux.js.org/) - State Management
- [Redux Saga](https://github.com/redux-saga/redux-saga) - Side Effect Model for Redux
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and Rehydrate a Redux Store.
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://github.com/testing-library/react-testing-library) - JavaScript Testing utility
- [ESLint](https://eslint.org/) - JavaScript Linter
- [Prop Types](https://github.com/facebook/prop-types) - Runtime Type Checking
- [Storybook](https://github.com/storybookjs/storybook) - Development Environment for UI Components
