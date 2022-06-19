import gql from 'graphql-tag'

export const getGigs = gql`
  query gigs {
    gigs {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`

export const createGigMutation = gql`
  mutation createGig(
    $id: String!
    $artist: JSONObject
    $date: String
    $venue: JSONObject
    $lineup: [String]
    $festival: JSONObject
  ) {
    createGig(id: $id, artist: $artist, date: $date, venue: $venue, lineup: $lineup, festival: $festival) {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`

export const deleteGigMutation = gql`
  mutation deleteGig($id: ID!) {
    deleteGig(id: $id) {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`

export const searchGigQuery = gql`
  query searchGig($artist: String!, $date: String) {
    searchGig(artist: $artist, date: $date)
  }
`

export const getGigsFilteredByFestival = gql`
  query gigsFestivalFilter {
    gigsFestivalFilter {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`

export const getGigsFilteredByMonth = gql`
  query gigsMonthFilter($month: Int!) {
    gigsMonthFilter(month: $month) {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`

export const getGigsFilteredByYear = gql`
  query gigsYearFilter($year: Int!) {
    gigsYearFilter(year: $year) {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`

export const getGigsUnfiltered = gql`
  query gigsUnfiltered {
    gigsUnfiltered {
      id
      artist
      date
      venue
      lineup
      festival
    }
  }
`
