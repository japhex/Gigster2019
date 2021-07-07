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

export const Button = styled.button`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bebas};
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
    fill: ${({ theme }) => theme.colors.white};
  }
`
