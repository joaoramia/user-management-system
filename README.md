# User Management System

## Initial comments

This project was created using create-react-app (please see [Create React App's Readme](docs/CREATE_REACT_APP.md)).

It uses SASS as a CSS preprocessor, and it was set up with create-react-app (please see [Create React App's Readme](docs/CREATE_REACT_APP.md/#adding-a-css-preprocessor-sass-less-etc) for a step by step on how to include SASS to create-react-app).

This app creates all the relationship logic between users and groups in the front end, with mocked data. It is important to note that in an actual application APIs would be used and all the relations, users and groups would be given by the backend.

Thus, every Redux action that changes the state in this app should fire an API call to a server so it can update the database and return the new data for the application.

## Project structure

This app is structured with the concept of presentational (`.src/components`) and container (`src/containers`) components. A presentational component is stateless and has as its single objective to be visual, whilst container components are stateful.

This app uses Redux to organize its data. This means it takes advantage of a single store for the whole application and a state to provide the data. I chose to use it since there is a complexity with the relationships between users and groups here, and it made it easier to control the data via actions and reducers, facilitating adding/removing/linking and filtering users and groups.

## Points for improvement

The app is not taking into account that groups should not exist without users and vice versa. With more time, it could be included as a validation for the user and group models, always checking if they became empty using the relations model.

Unit tests were mainly related to the actions and reducers related to the groups, users and relations. With more time, more tests with Enzyme could be created with the entire application using the state and store.

## Setup

Run `npm install` to get the dependencies.

## Development server

Run `npm start` to run a local dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run buld` to build the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Running unit tests

Run `npm run test` to launch the test runner in the interactive watch mode. It uses Jest and some Enzyme helpers for the unit tests. Please see a good documentation on Jest, Enzyme and more at `http://airbnb.io/enzyme/docs/api/`

## Styling

This app uses SASS, Bootstrap 4 and FontAwesome for styling. The idea was to keep it as clean as possible, so the SASS code was kept inside of `.src/index.scss` for simplicity.