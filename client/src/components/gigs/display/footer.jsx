import React from 'react'

import { Div } from 'components/gigs/styles/footerStyled'
import { Button } from 'components/utils/styles/formsStyled'
import { Buttons } from 'components/utils/styles/modalStyled'

const Footer = ({ songkickGig, switchEditMode }) => {
  return (
    <Div>
      <Buttons>
        {!songkickGig && <Button onClick={switchEditMode}>Edit</Button>}
      </Buttons>
    </Div>
  )
}

export default Footer
