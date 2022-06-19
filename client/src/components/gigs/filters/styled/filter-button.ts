import styled from 'styled-components'
import { theme } from 'themes/default'

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  outline: 0;
  border: none;
  padding: 14px 10px 10px 10px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.bebas};
  font-size: 1.2rem;
  cursor: pointer;

  &:active {
    border: 0;
  }
`
