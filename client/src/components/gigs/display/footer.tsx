import { Div } from 'components/gigs/styles/footer.styled'
import { Button } from 'components/utils/styles/forms.styled'
import { Buttons } from 'components/utils/styles/modal.styled'
import { Flex } from '@chakra-ui/react'

interface Props {
  songkickGig: any
  switchEditMode: boolean
}

const Footer = ({ songkickGig, switchEditMode }: Props) => (
  <Flex align="center" justify="flex-end" pt="10px">
    {/* @ts-ignore */}
    <Buttons>{!songkickGig && <Button onClick={switchEditMode}>Edit</Button>}</Buttons>
  </Flex>
)

export default Footer
