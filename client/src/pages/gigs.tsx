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

const Gigs = () => {
  const { loading, error, data } = useQuery<GigsQuery>(GigsDocument)
  const gigs = data?.gigs || []
  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridGap={4} w="100%">
      {gigs.map(({ id, artist, date, venue, lineup, festival }) => (
        <Flex key={id} gap={2}>
          <Box
            bg="#fafbff"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
            w="100%"
            outline="1px solid #eee"
          >
            <Box h="150px" w="100%" bgImg={artist.image} bgSize="cover" bgPosition="top"></Box>
            <Box p={4}>
              <Flex align="center" gap={4}>
                <Tag colorScheme="orange" size="lg">
                  {festival.start_date && <Icon as={MdOutlineFestival} />} {artist.name}
                </Tag>
                <Flex align="center" gap={2} ml="auto">
                  <CalendarIcon />
                  <Text fontSize="sm">{format(new Date(date), 'MMM do yyyy - p')}</Text>
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
                {lineup.length > 1 && (
                  <Box ml="auto">
                    <Popover>
                      <PopoverTrigger>
                        <Button size="sm" leftIcon={<Icon boxSize={5} as={GrGroup} />}>
                          support
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverBody>
                          <Flex gap={2} wrap="wrap">
                            {lineup.map(band => (
                              <Badge colorScheme="orange">{band}</Badge>
                            ))}
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                )}
              </Flex>
            </Box>
          </Box>
        </Flex>
      ))}
    </Grid>
  )
}

export default Gigs
