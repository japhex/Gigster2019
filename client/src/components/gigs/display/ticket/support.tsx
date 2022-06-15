import { Flex } from '@chakra-ui/react'
import { Title, Band } from 'components/gigs/display/styled/support'

interface Props {
  supports: any[]
  type: string
}

export const Support = ({ supports, type }: Props) => (
  <>
    {supports.length > 0 ? (
      <Title>{type === 'Festival' ? 'with:' : 'support:'}</Title>
    ) : (
      <Title empty>No support acts</Title>
    )}
    <Flex wrap="wrap" justify="center">
      {supports.map(band => (
        <Band>{band}</Band>
      ))}
    </Flex>
  </>
)
