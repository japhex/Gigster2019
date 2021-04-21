import React from 'react'

import { Mutation } from 'react-apollo'

import { createSongkickGigMutation, getGigs } from '../../../api/gigs/gigs'
import { GigResult } from '../styles/searchResultsStyled'

import GigResultFooterParent from './footer'
import GigResultHeaderParent from './header'

const GigResultParent = ({ gig }) => {
  const saveGig = async (e, createSongkickGig) => {
    e.preventDefault()
    await createSongkickGig({
      variables: { songkickId: gig.id, songkickJson: gig },
    })
  }

  return (
    <Mutation
      mutation={createSongkickGigMutation}
      update={(cache, { data }) => {
        const newGigs = data.createSongkickGig
        cache.writeQuery({ query: getGigs, data: { gigs: newGigs } })
      }}
    >
      {createSongkickGig => (
        <GigResult onClick={e => saveGig(e, createSongkickGig)}>
          <GigResultHeaderParent gig={gig} />
          <GigResultFooterParent gig={gig} />
        </GigResult>
      )}
    </Mutation>
  )
}

export default GigResultParent
