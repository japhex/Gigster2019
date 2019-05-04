const express = require('express');
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
const APIAuth = require('./routes/users');
const APIGigs = require('./routes/gigs');
const APISearch = require('./routes/third-parties/songkick');
const PORT = process.env.PORT || 3001;
const models = require("./models");
const jwt = require('express-jwt')
const app = express();

app.use('/api', jwt({
	secret: 'super secret',
	credentialsRequired: false
}));

const server = new ApolloServer({
	typeDefs: gql(typeDefs),
	resolvers,
	context: ({req}) => ({
		user: req.user
	})
});

server.applyMiddleware({ app, path:'/api' });

// app.use('/api/', APIAuth);
// app.use('/api/gigs', APIGigs);
// app.use('/api/search', APISearch);

models.sequelize.sync().then(() => {
    app.listen(PORT, function () {});

    // GraphQL Server
	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);
})

module.exports = app;