import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`
