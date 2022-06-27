import { useMutation } from '@apollo/react-hooks'
import { format, parseISO } from 'date-fns'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { CreateGigDocument, Gig, GigsDocument } from '../../generated/graphql'
import { MdOutlineCalendarToday, MdOutlineLocationOn, MdOutlineSpeaker } from 'react-icons/all'

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
    <Flex align="center" onClick={saveGig} cursor="pointer" bg="#EDF2F7" p={4} borderRadius={4} gap={4}>
      <Flex
        basis="100px"
        grow={0}
        shrink={0}
        h="100px"
        w="100px"
        bgImg={gig.artist.image}
        bgSize="cover"
        bgPosition="top"
        borderRadius="50px"
      />
      <Flex direction="column" gap={2}>
        <Text fontSize="xl">{gig.artist.name}</Text>
        <Text fontSize="sm">
          <Flex direction="column" gap={2}>
            <Flex gap={2} align="center">
              <Icon as={MdOutlineCalendarToday} boxSize={4} />
              <Box>
                {gig.date.start && format(parseISO(gig.date.start), 'MMMM do yyyy')}
                {gig.date.end && `- ${format(parseISO(gig.date.end), 'MMMM do yyyy')}`}
              </Box>
            </Flex>
            <Flex gap={2} align="center">
              <Icon as={MdOutlineLocationOn} boxSize={4} />
              <Box>{gig.venue.name}</Box>
            </Flex>
          </Flex>
        </Text>
      </Flex>
    </Flex>
  )
}

export default GigResult
