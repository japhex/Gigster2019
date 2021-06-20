import * as React from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const buttonType = (props, hover = false) => {
  const {
    type,
    theme: {
      colors: { primary, primaryHover, secondary, secondaryHover },
    },
  } = props
  switch (type) {
    case 'primary':
      return hover ? primaryHover : primary
    case 'secondary':
      return hover ? secondaryHover : secondary
    default:
      return hover ? primaryHover : primary
  }
}

const Button = styled(motion.button)`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  border: 0;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bebas};
  border-radius: 2px;
  background: ${props => buttonType(props)};
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }

  &:focus {
    outline: 0;
  }

  svg {
    height: 20px;
    fill: ${props => props.theme.colors.white};
  }
`

const Text = styled(motion.span)`
  padding: 13px;
  font-size: 18px;
  line-height: 1;
`

export const ButtonStyled = props => {
  const { children } = props
  return (
    <Button {...props}>
      <Text>{children}</Text>
    </Button>
  )
}
