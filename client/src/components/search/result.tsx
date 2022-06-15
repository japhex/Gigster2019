import { useMutation } from '@apollo/react-hooks'
import { createSongkickGigMutation, getGigs } from 'api/gigs/gigs'
import { GigResult } from 'components/gigs/styles/search-results.styled'
import GigResultFooterParent from 'components/search/footer'
import GigResultHeaderParent from 'components/search/header'


const GigResultParent = ({ gig }) => {
  const [createGig] = useMutation(createSongkickGigMutation, {
    refetchQueries: [{ query: getGigs }],
  })

  const saveGig = async () => {
    // IN API METHOD CHECK TO SEE IF GIG ALREADY EXISTS FOR USER
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
