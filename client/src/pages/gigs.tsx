import { useQuery } from '@apollo/react-hooks'
import QueryHandler from 'components/utils/queryHandler'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
} from '@chakra-ui/react'
import { GigsDocument, GigsQuery } from '../generated/graphql'
import { format } from 'date-fns'
import { CalendarIcon } from '@chakra-ui/icons'
import { GrGroup, MdOutlineFestival, MdOutlineLocationOn } from 'react-icons/all'
import { genreType } from '../utils/gigs'

const Gigs = () => {
  const { loading, error, data } = useQuery<GigsQuery>(GigsDocument)
  const gigs = data?.gigs || []
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridGap={6} w="100%">
      {gigs.map(({ id, artist, date, venue, lineup, festival }) => (
        <Flex key={id} gap={2}>
          <Box
            bg="#fafbff"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
            w="100%"
            outline="1px solid #eee"
            boxShadow="1px 6px 17px 1px #e3e3e3"
          >
            <Box h="150px" w="100%" bgImg={artist.image} bgSize="cover" bgPosition="top"></Box>
            <Tag colorScheme="orange" size="lg" borderRadius="0" w="100%">
              <Flex w="100%">
                <Box>{artist.name}</Box>
                {festival.start_date && <Icon as={MdOutlineFestival} ml="auto" />}
              </Flex>
            </Tag>
            <Box p={4}>
              <Flex mb={4}>
                <Flex gap={2} my={2}>
                  {artist.genre && (
                    <Tag size="sm" colorScheme={genreType[artist.genre]} variant="outline">
                      {artist.genre}
                    </Tag>
                  )}
                  {artist.subGenre && (
                    <Tag size="sm" colorScheme={genreType[artist.subGenre]} variant="outline">
                      {artist.subGenre}
                    </Tag>
                  )}
                </Flex>
                {lineup?.length > 1 && (
                  <Box ml="auto">
                    <Popover>
                      <PopoverTrigger>
                        <Button size="sm" leftIcon={<Icon boxSize={5} as={GrGroup} />}>
                          lineup
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverBody>
                          <Flex gap={2} wrap="wrap">
                            {lineup.map(band => (
                              <Badge colorScheme="orange" key={band.name}>
                                {band.name}
                              </Badge>
                            ))}
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                )}
              </Flex>
              <Flex align="center" gap={4}>
                <Flex align="center" gap={2}>
                  <CalendarIcon />
                  <Text fontSize="sm">
                    {date?.start && format(new Date(date?.start), 'MMM do yyyy')}{' '}
                    {date?.end && `- ${format(new Date(date?.end), 'MMM do yyyy')}`}
                  </Text>
                </Flex>
              </Flex>
              <Flex gap={2} mt={4}>
                <Icon as={MdOutlineLocationOn} boxSize={5} mt={2} />
                <Box>
                  <Text fontSize="sm">{venue.name}</Text>
                  <Text fontSize="xs">
                    {venue.city}, {venue.country}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      ))}
    </Grid>
  )
}

export default Gigs
