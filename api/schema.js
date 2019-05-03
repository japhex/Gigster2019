export default `
  type User {
    id: ID!
    username: String!
    lastName: String!
    gigs: [Gig!]!
  }
  
  type Gig {
    id: ID!
    artist: String
    date: String!
    venue: String!
    location: String!
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User
    gigs: [Gig!]!
    gig(id: ID!): Gig
  }
  
  type Mutation {
    createGig(artist: String, date: String, venue: String, location: String): Gig!
    updateGig(id: ID!, artist: String, date:String, venue:String, location:String): [Int!]!
    deleteGig(id: ID!): Int!
  }
`