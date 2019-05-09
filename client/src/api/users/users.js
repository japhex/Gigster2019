import gql from "graphql-tag";

export const getUsers = gql`
{
  users {
    id
    username
  }
}`;

export const getUser = gql`
query user($username: String!) {
    user(username: $username) {
        id
        username
        gigs {
            artist
            date
            venue
        }
    }
}`;