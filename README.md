## Scott Warren

Frontend and API code for the project exercise portion of the Get Selected interview process.

## Global Dependency Information

* Node
  * Version I have installed: `v8.12.0` -- latest LTS of version 8
* NVM
  * Version I have installed: `0.33.2`
  * Why: Using NVM to manage Node version's between the projects
* Nodemon
  * Version: I have installed: `1.18.4`
  * Installed globally
  * Why: Nodemon runs locally and updates the server upon file changes -- useful for development
  * Note: You can safely ignore this since you won't be running `yarn dev` for the API (use `yarn start` instead)

## Information

Monorepo setup to (hopefully) simplify the frontend and API setup for this specific project.

I've made the assumption that MongoDB is installed and running locally.

### Setup

* Clone repo
* `cd ./frontend`
* Run `yarn install` to install dependencies
* Run `yarn start` to start the local server
* cd `../api`
* Run `yarn install` to install dependencies
* Run `yarn start` to start the local express server
* Create a MongoDB database named `getselected-scott`

### Notes:

#### Frontend

Frontend bootstrapped with `create-react-app`

To generate a new unread message with stub data, click the "Receive New Message" button

#### API

I've exported a Postman collection into the `/api` folder, which you can import into Postman to see the API routes