import { ApolloServer, gql } from 'apollo-server-express'
import mongoose from 'mongoose'

import resolvers from './resolvers'
import typeDefs from './schema'

require('dotenv').config()

const express = require('express')
const jwt = require('express-jwt')

const PORT = process.env.PORT || 3001
const app = express()

// Mongo connection
mongoose.connect(
  'mongodb+srv://dbUser:igoAua87HDwhKgw4@cluster0.ezyqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
)
mongoose.set('debug', true)

// Set CORS headers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Create api route
app.use(
  '/api',
  jwt({
    secret: 'super secret',
    credentialsRequired: false,
  })
)

// Create apollo server
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: ({ req, res }) => {
    return {
      user: req.user,
      req,
      res,
    }
  },
})

// Apply middleware
server.applyMiddleware({ app, path: '/api' })

// Create app service
app.listen(PORT, function () {})

// GraphQL Server
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

module.exports = app
