import styled from 'styled-components'

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.white};
  padding: 14px 10px 10px 10px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bebas};
  font-size: 1.2rem;
  cursor: pointer;
`
