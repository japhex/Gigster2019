import { ApolloServer, gql } from 'apollo-server-express'
import mongoose from 'mongoose'

import resolvers from './resolvers'
import typeDefs from './schema'
import { RequestWithProps } from './types'

require('dotenv').config()

const express = require('express')
const jwt = require('express-jwt')

const PORT = process.env.PORT || 3001
const app = express()

// Mongo connection
mongoose.connect('mongodb://localhost:27017/gigster')
mongoose.set('debug', true)

// Set CORS headers
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
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
  context: ({ req, res }: { req: RequestWithProps; res: Response }) => {
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
app.listen(PORT)

// GraphQL Server
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))

module.exports = app
