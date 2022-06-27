import { useQuery } from '@apollo/react-hooks'
import QueryHandler from 'components/utils/queryHandler'
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { GigsDocument, GigsQuery } from '../generated/graphql'
import { format } from 'date-fns'
import { MdOutlineFestival, MdOutlineInfo, MdOutlineLocationOn } from 'react-icons/all'

const Gigs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading, error, data } = useQuery<GigsQuery>(GigsDocument)
  const gigs = data?.gigs || []

  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gridGap={6} w="100%">
      {gigs.map(({ id, artist, date, venue, lineup, festival, info }) => (
        <Flex key={id} gap={2}>
          <Flex direction="column" w="100%" color="#cecece" outline="1px solid #222">
            <Box h="150px" w="100%" bgImg={artist.image} bgSize="cover" bgPosition="top" />
            <Box p={4}>
              <Box py={2} pb={0}>
                <Flex w="100%">
                  <Box>
                    <Text fontSize="lg" noOfLines={1} color="#fff" fontWeight="bold">
                      {artist.name}
                    </Text>
                  </Box>
                  <Flex ml="auto" gap={2}>
                    {info?.length > 1 && (
                      <>
                        <Button
                          size="sm"
                          leftIcon={<Icon boxSize={5} as={MdOutlineInfo} />}
                          onClick={onOpen}
                          variant="outline"
                        >
                          info
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalCloseButton />
                            <ModalBody p={10}>{info}</ModalBody>
                          </ModalContent>
                        </Modal>
                      </>
                    )}
                    {lineup?.length > 1 && (
                      <Popover>
                        <PopoverTrigger>
                          <Button size="sm" variant="outline">
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
                    )}
                  </Flex>
                  {festival.start_date && <Icon as={MdOutlineFestival} ml="auto" />}
                </Flex>
              </Box>
              <Box pb={2}>
                <Text fontSize="sm">
                  {date?.start && format(new Date(date?.start), 'MMM do yyyy')}{' '}
                  {date?.end && date?.start !== date?.end && `- ${format(new Date(date?.end), 'MMM do yyyy')}`}
                </Text>
              </Box>
              <Flex gap={2} mt={2} align="center">
                <Icon as={MdOutlineLocationOn} boxSize={5} />
                <Box>
                  <Text fontSize="sm">{venue.name}</Text>
                  <Text fontSize="xs">
                    {venue.city}, {venue.country}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex gap={2} my={2} mt="auto" p={4}>
              {artist.genre && (
                <Tag size="sm" colorScheme="gray">
                  {artist.genre}
                </Tag>
              )}
              {artist.subGenre && (
                <Tag size="sm" colorScheme="gray">
                  {artist.subGenre}
                </Tag>
              )}
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Grid>
  )
}

export default Gigs
