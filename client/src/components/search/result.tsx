import { useMutation } from '@apollo/react-hooks'
import { format, parseISO } from 'date-fns'
import { Flex, Box } from '@chakra-ui/react'
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
      <Box>{gig.artist.name}</Box>
      {gig.date.start && format(parseISO(gig.date.start), 'MMMM do yyyy')}
      {gig.date.end && `- ${format(parseISO(gig.date.end), 'MMMM do yyyy')}`}
      <Box>{gig.venue.name}</Box>
    </Flex>
  )
}

export default GigResult
