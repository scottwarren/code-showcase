### API

I've exported a Postman collection into the `/api` folder, which you can import into Postman to see the API routes

I used Mongoose ORM to enable easy use with MongoDB

* Routes definitions are contained within the `routes` folder
* Controller code (of which, the methods are references in the routes definition) are contained within the `controllers` folder
* Mongoose model definition are contained within the `models`
* Main app definition and setup is within the `index.js` file. It defines things like:
  * DB name
  * Port to run the local environment on
  * The base route
* Stub data generated using [Faker](https://github.com/marak/Faker.js/) for the message content and the author name
