import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
const express = require('express');
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

models.sequelize.sync().then(() => {
    app.listen(PORT, function () {});

    // GraphQL Server
	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);
})

module.exports = app;