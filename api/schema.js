import { makeExecutableSchema } from 'graphql-tools';
import {GraphQLDate} from 'graphql-iso-date';
import {GraphQLJSONObject} from 'graphql-type-json';


const resolveFunctions = {
	Date: GraphQLDate,
	JSONObject: GraphQLJSONObject
};

const schemaString = `

  scalar Date
  scalar JSONObject

  type User {
    id: ID!
    username: String!
    gigs: [Gig!]!
  }
  
  type Gig {
    id: ID!
    artist: String
    date: Date
    venue: String!
    location: String!
  }
  
  type Query {
    users: [User!]!
    loggedInUser: User
    user(username: String!): User
    searchUsers(username: String!): [User]
    gigs: [Gig!]!
    gig(id: ID!): Gig
  }
  
  type Mutation {
    signup(username: String!, password: String!): String
    login(username: String!, password: String!): String
    createGig(artist: String, date: Date, venue: String): [Gig!]!
    updateGig(id: ID!, artist: String, date: Date, venue: String): [Gig!]!
    deleteGig(id: ID!): [Gig!]!
    searchGig(artist: String!): JSONObject
  }
`;

makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });

export default schemaString