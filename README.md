# Gigster2019
2019 version of gigster

## Idea
The concept of Gigster is a mix of two, its either:

- a personal Gig diary where you can keep track of all your gigs past and future
- the same as the above but with social interaction and sharing

## Tech Stack
Gigster currently runs on:

### Setup
- Docker/Docker-compose

### Back-end
- Node.js
- Express.js (thinking about moving to koa.js?)
- MongoDB using Mongoose
- GraphQL
- JWT Authentication
- request and request-promise (to handle external API requests, e.g. to the Last.FM API)

### Front-end
- React.js (including Suspense, Hooks...)
- GraphQL
- Apollo
- Formik
- Styled components

## Running the app
The easiest way is by using Docker, if you haven't used it before - don't be scared, its super simple.
Just download and install Docker, make sure you're in the `root` directory of the app, and simple run:

```
docker-compose up
```

This will start a set of Docker containers, providing everything the app needs to run.
