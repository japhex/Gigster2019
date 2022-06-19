import { useMutation } from '@apollo/react-hooks'
import { format, parseISO } from 'date-fns'
import { Flex } from '@chakra-ui/react'
import { CreateGigDocument, Gig, GigsDocument } from '../../generated/graphql'

interface Props {
  gig: Gig
}

const GigResult = ({ gig }: Props) => {
  const [createGig] = useMutation(CreateGigDocument, {
    refetchQueries: [{ query: GigsDocument }],
  })

  const saveGig = async () => {
    await createGig({
      variables: { ...gig },
      refetchQueries: ['gigs'],
    })
  }

  return (
    <Flex onClick={saveGig}>
      {gig.artist.name} - {format(parseISO(gig.date), 'MMMM do yyyy')} - {gig.venue.name}
    </Flex>
  )
}

export default GigResult
