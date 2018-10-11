## Project Showcase

This project's goal is to showcase (and improve) my development skills. While originally the project code was used as a part of a technical interview, I've used it as a base to improve upon.

### Technologies

* Frontend
  * React
  * SCSS
* API
  * Node.js
  * Express
  * MongoDB (Database)
  * Mongoose (MongoDB ORM)
* Testing
  * Cypress (End-to-end testing)
  * Jest (Component and unit testing)

## Setup 

This project is stored as a monorepo, to group the code as a showcase (avoiding bikeshedding about the decision).

** NOTE: I've made an assumption that MongoDB is setup (and running) locally **

### Global Dependency Information

* Node
  * Version I have installed: `v8.12.0` -- latest LTS of version 8
* NVM
  * Version I have installed: `0.33.2`
  * Why: Using NVM to manage Node version's between the frontend and backend
* Nodemon
  * Version: I have installed: `1.18.4`
  * Installed globally
  * Why: Nodemon runs locally and updates the API upon API file changes -- useful for development

### Setup steps

For more detailed information, see the project folder for it's readme.

**Frontend**

* Clone repo
* Run `yarn install` to install dependencies
* Run `yarn start` to start the local server

**API**
* Create a MongoDB database named `code-showcase`
* Run `yarn install` to install dependencies
* Run `yarn start` to start the local development instance of the API

### Notes:


**Remaining/Outstanding changes/future improvements**

* Frontend
  * [ ] Add a "loading" indicator for when the frontend is fetching messages instead of just showing "No messages found" until it's fetched
  * [ ] Not hit the messages API endpoint to retrieve the messages when we change the `read` status
  * [ ] Messages list pagination
  * [ ] Show the thread in the display message panel instead of just the latest message
  * [ ] Change the repo installation to be a one script to start all applications
  * [ ] _TESTING_
* API
  * [ ] Clean up of the `index.js` file contents
  * [ ] Messages list pagination
  * [ ] Improve the stub message generation to not always include Lorem Ipsum
  * [ ] Thread endpoint instead of message endpoint
  * [ ] Change the repo installation to be a one script to start all applications
  * [ ] Improve documentation for the endpoints (Postman collection probably isn't enough)
  * [ ] _TESTING_
