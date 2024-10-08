# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Quick setup:

### `npm i`
### `npm run dev`

### Uses npm-run-all to:
Run the app in development mode on port 3000. Start the json server to serve data records on port 3001 by default. Watch for scss changes and automatically compile to css.

### DESCRIPTION

Reading list application from Stephen Grider's Udemy course on React/Redux.
This project was the first "full stack" react application of the course, and targeted:

    - Prop communication from parent/child components
    - Displaying "Book" components based on JSON data returned from a local server
    - Creating a simple local development server for persitent data
    - CRUD operations
    - Introduction into contexts and hooks

I have modified this project to include:

    - Data fetching from Google Books API
    - A view of your library with books sorted by their author
    - SCSS styling
    - Input validations 
    - Tracking of pages read including a progress bar

The purpose of this project was to practice working on a more complex app rather than small coursework projects.

### `npm start`

Starts the react development server
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Starts the json-server on port 3001. Recommended to use "npm run dev" instead to launch project and server in parallel.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


