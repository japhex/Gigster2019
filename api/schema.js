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
  
  type UserWithGigs {
    id: ID!
    username: String!
    gigs: SortedGigs
  }
  
  type Gig {
    id: ID!
	songKickGig: JSONObject
  }
  
  type SortedGigs {
    oldGigs: [Gig]
    newGigs: [Gig]
  }
  
  type Query {
    users: [User!]!
    loggedInUser: User
    user(username: String!): UserWithGigs
    userGigs(userId: ID!): UserWithGigs
    searchUsers(username: String!): [User]
    gigs: SortedGigs
    gig(id: ID!): Gig
  }
  
  type Mutation {
    signup(username: String!, password: String!): String
    login(username: String!, password: String!): String
    createGig(artist: String, date: Date, venue: String): [Gig!]!
    createSongkickGig(songkickId: ID!, songkickJson: JSONObject): SortedGigs
    deleteGig(id: ID!): SortedGigs
    searchGig(artist: String!): JSONObject
    rateGig(id: ID!, rating: Int!): Int
  }
`;

makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });

export default schemaString