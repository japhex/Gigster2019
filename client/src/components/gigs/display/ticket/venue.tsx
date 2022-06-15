import { Box } from '@chakra-ui/react'

interface Props {
  venue: string
  location: string
}

export const Venue = ({ venue, location }: Props) => (
  <Box>
    <Box>{venue}</Box>
    <Box>{location}</Box>
  </Box>
)
