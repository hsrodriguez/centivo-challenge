# centivo-challenge

This is a technical challenge for the Senior Software Engineer role at Centivo.

- It is a basic implementation of and endpoint `/users/:id`
- It returns the users in the `centivo` database `users` collection thaat matches the `_id` and the `age` is greater than 21
- It returns `400` error if the `:id` is invalid and `404` if the user doesn't exist or the `age` doesn't meet the requirements
- It includes a `docker-compose.yml` to create a MongoDB server with Mongo Express UI to test it easily
