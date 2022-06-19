import gql from 'graphql-tag'

export const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`

export const signupMutation = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password)
  }
`

export const getUsers = gql`
  {
    users {
      id
      username
    }
  }
`

export const getUser = gql`
  query user($username: String!) {
    user(username: $username) {
      id
      username
      gigs {
        id
        artist
        date
        venue
        lineup
        festival
      }
    }
  }
`

export const getLoggedInUser = gql`
  query loggedInUser {
    loggedInUser {
      id
      username
    }
  }
`

export const searchUsers = gql`
  query searchUsers($username: String!) {
    searchUsers(username: $username) {
      id
      username
    }
  }
`

export const getGigsByUser = gql`
  query userGigs($userId: ID!) {
    userGigs(userId: $userId) {
      id
      username
      gigs {
        id
        artist
        date
        venue
        lineup
        festival
      }
    }
  }
`
