import styled from 'styled-components'
import { theme } from 'themes/default'

// @ts-ignore
const buttonType = (props, hover = false) => {
  const { type } = props
  switch (type) {
    case 'primary':
      return hover ? theme.colors.primaryHover : theme.colors.primary
    case 'secondary':
      return hover ? theme.colors.secondaryHover : theme.colors.secondary
    default:
      return hover ? theme.colors.primaryHover : theme.colors.primary
  }
}

export const Button = styled.button<{ inline: boolean }>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.bebas};
  border-radius: 2px;
  background: ${props => buttonType(props)};
  cursor: pointer;
  padding: 4px 13px 0 13px;
  border: 1px solid;
  font-size: 40px;
  line-height: 1;

  &:hover {
    background: ${props => buttonType(props, true)};
  }

  &:focus {
    outline: 0;
  }

  svg {
    height: 20px;
    fill: ${theme.colors.white};
  }
`
