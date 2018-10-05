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

If there are any issues/questions (eg setting up, or why I did something a particular way) _please_ contact me!

Monorepo setup to (hopefully) simplify the frontend and API setup for this specific project.

I've made the assumption that MongoDB is installed and running locally.

Based on the document provided for this project, I didn't appear to require the `invites` API endpoint, and thus I have left this out of the code completed.

### Setup

* Clone repo
* Create a MongoDB database named `getselected-scott`
* `cd ./frontend`
* Run `yarn install` to install dependencies
* Run `yarn start` to start the local server
* cd `../api`
* Run `yarn install` to install dependencies
* Run `yarn start` to start the local development instance of the API

### Notes:

#### Frontend

Frontend bootstrapped with `create-react-app`

To generate a new unread message with stub data, click the "Receive New Message" button

Click on a message to show it's content's in the message content panel on the right, as well as mark the message as read


*Remaining/Outstanding changes/future improvements*

 * Add a "loading" indicator for when the frontend is fetching messages instead of just showing "No messages found" until it's fetched
 * Not hit the messages API endpoint to retrieve the messages when we change the `read` status
 * Message pagination

#### API

I've exported a Postman collection into the `/api` folder, which you can import into Postman to see the API routes

I used Mongoose ORM to enable easy use with MongoDB

* Routes definitions are contained within the `routes` folder
* Controller code (of which, the methods are references in the routes definition) are contained within the `controllers` folder
* Mongoose model definition are contained within the `models`
* Main app definition and setup is within the `index.js` file. It defines things like:
  * DB name
  * Port to run the local environment on
  * The base route

*Remaining/Outstanding changes/future improvements*
 * Clean up of the `index.js` file contents
 * Message pagination
 * Improve the stub message generation to not always include Lorem Ipsum