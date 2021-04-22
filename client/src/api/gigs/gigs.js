import gql from 'graphql-tag'

export const getGigs = gql`
  {
    gigs {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`

export const createGigMutation = gql`
  mutation createGig($artist: String!, $date: Date!, $venue: String!) {
    createGig(artist: $artist, date: $date, venue: $venue) {
      id
      songKickGig
    }
  }
`

export const createSongkickGigMutation = gql`
  mutation createSongkickGig($songkickId: ID!, $songkickJson: JSONObject!) {
    createSongkickGig(songkickId: $songkickId, songkickJson: $songkickJson) {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`

export const deleteGigMutation = gql`
  mutation deleteGig($id: ID!) {
    deleteGig(id: $id) {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`

export const searchGigMutation = gql`
  mutation searchGig($artist: String!) {
    searchGig(artist: $artist)
  }
`

export const searchGigs = gql`
  query searchGigs($artist: String!) {
    searchUsers(artist: $username) {
      name
    }
  }
`

export const getGigsFilteredByFestival = gql`
  query gigsFestivalFilter {
    gigsFestivalFilter {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`

export const getGigsFilteredByMonth = gql`
  query gigsMonthFilter($month: Int!) {
    gigsMonthFilter(month: $month) {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`

export const getGigsFilteredByYear = gql`
  query gigsMonthFilter($year: Int!) {
    gigsYearFilter(year: $year) {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`

export const getGigsUnfiltered = gql`
  query gigsUnfiltered {
    gigsUnfiltered {
      oldGigs {
        id
        songKickGig
      }
      newGigs {
        id
        songKickGig
      }
    }
  }
`
