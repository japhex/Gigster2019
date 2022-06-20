import { GraphQLDate } from 'graphql-iso-date'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLJSONObject } from 'graphql-type-json'

const resolveFunctions = {
  Date: GraphQLDate,
  JSONObject: GraphQLJSONObject,
}

const schemaString = `
  scalar Date
  scalar JSONObject

  type User {
    id: ID!
    username: String!
    gigs: [Gig!]!
  }
  
  type UserWithGigs {
    id: ID!
    username: String!
    gigs: [Gig]
  }
  
  type Gig {
    id: ID!
    artist: JSONObject
    date: JSONObject
    info: String
    venue: JSONObject
    lineup: [JSONObject]
    festival: JSONObject
  }
  
  type Query {
    users: [User!]!
    loggedInUser: User
    user(username: String!): UserWithGigs
    userGigs(userId: ID!): UserWithGigs
    searchUsers(username: String!): [User]
    searchGig(artist: String!, date: String, type: String): JSONObject
    gigs: [Gig]
    gigsUnfiltered: [Gig]
    gigsFestivalFilter: [Gig]
    gigsMonthFilter(month: Int!): [Gig]
    gigsYearFilter(year: Int!): [Gig] 
    gig(id: ID!): Gig
  }
  
  type Mutation {
    signup(username: String!, password: String!): String
    login(username: String!, password: String!): String
    createGig(id: String!, artist: JSONObject, date: JSONObject, venue: JSONObject, lineup: [JSONObject], festival: JSONObject): Gig!
    deleteGig(id: ID!): [Gig]
    rateGig(id: ID!, rating: Int!): Int
  }
`

makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions })

export default schemaString
