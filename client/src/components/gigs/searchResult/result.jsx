import React from 'react'

import { useMutation } from '@apollo/react-hooks'

import { createSongkickGigMutation, getGigs } from 'api/gigs/gigs'
import GigResultFooterParent from 'components/gigs/searchResult/footer'
import GigResultHeaderParent from 'components/gigs/searchResult/header'
import { GigResult } from 'components/gigs/styles/searchResultsStyled'

const GigResultParent = ({ gig }) => {
  const [createGig] = useMutation(createSongkickGigMutation, {
    refetchQueries: [{ query: getGigs }],
  })

  const saveGig = async () => {
    await createGig({
      variables: { songkickId: gig.id, songkickJson: gig },
    })
  }

  return (
    <GigResult onClick={saveGig}>
      <GigResultHeaderParent gig={gig} />
      <GigResultFooterParent gig={gig} />
    </GigResult>
  )
}

export default GigResultParent
