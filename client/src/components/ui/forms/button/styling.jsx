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
  line-height: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  border-radius: 4px;
  background: ${props => buttonType(props)};
  cursor: pointer;
  padding: 16px;

  &:hover {
    background: ${props => buttonType(props, true)};
  }

  &:focus {
    outline: 0;
  }

  svg {
    height: 20px;
    fill: ${props => props.theme.colors.white};
  }
`

export const ButtonStyled = props => {
  const { children } = props
  return (
    <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} {...props}>
      {children}
    </Button>
  )
}
