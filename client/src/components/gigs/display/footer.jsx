import React from 'react'

import { Button } from '../../utils/styles/formsStyled'
import { Buttons } from '../../utils/styles/modalStyled'
import { Div } from '../styles/footerStyled'

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
