# User Management System

## Initial comments

This project was created using create-react-app (please see [Create React App's Readme](docs/CREATE_REACT_APP.md)).

It uses SASS as a CSS preprocessor, and it was set up with create-react-app (please see [Create React App's Readme](docs/CREATE_REACT_APP.md/#adding-a-css-preprocessor-sass-less-etc)).

This app is structured with the App component in the root of src and all its children are inside src/components. I chose to put every component inside its own folder as a personal preference, putting all the styling inside of its component's folder.

## Folder structure

This app is structured with the concept of presentational (`.src/components`) and container (`src/containers`) components. A presentational component is stateless and has as its single objective to be visual, whilst container components are stateful.

I chose to put every component inside its own folder as a personal preference, putting all the styling and tests inside of its component's folder.

## Setup

Run `npm install` to get the dependencies.

## Development server

Run `npm start` to run a local dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run buld` to build the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Running unit tests

Run `npm run test` to launch the test runner in the interactive watch mode.

