const express = require('express');
const path = require('path');
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const APIAuth = require('./routes/users');
const APIGigs = require('./routes/gigs');
const APISearch = require('./routes/third-parties/songkick');
const PORT = process.env.PORT || 3001;
const models = require("./models");

const server = new ApolloServer({
	typeDefs: gql(typeDefs),
	resolvers,
	context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/', APIAuth);
app.use('/api/gigs', APIGigs);
app.use('/api/search', APISearch);

models.sequelize.sync().then(() => {
    app.listen(PORT, function () {});

    // GraphQL Server
	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);
})

module.exports = app;