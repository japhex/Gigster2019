# Gigster2019
Latest maintained, up to date version with a modern stack

## Idea
The concept of Gigster is a mix of two, its either:

- a personal Gig diary where you can keep track of all your gigs past and future
- the same as the above but with social interaction and sharing

## Tech Stack
Gigster currently runs on:

### Back-end
- Node.js
- Express.js (thinking about moving to koa.js?)
- MySQL (as mostly models and data are relational)
- GraphQL
- JWT Authentication
- Sequelize.js (ORM)
- request and request-promise (to handle external API requests, e.g. to the Last.FM API)

### Front-end
- React.js (including Suspense, Hooks...)
- GraphQL
- Apollo
- Formik
- Styled components

## Running the app
You'll need to create a local MySQL DB called **gigster** and use something like MAMP to run a local MySQL server instance.

Clone the repository and run the following in both the **client** and **api** directories:

```
npm install
```

That should be it, just run

```
npm start
```

## Running the app with a remote DB rather than local MySQL
Start the api server in the **api** directory by using:

```
npm run start-test
```