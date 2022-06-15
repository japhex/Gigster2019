import styled from 'styled-components'

export const Ticket = styled.div`
  background-color: #ff706b;
  margin-bottom: 1rem;
  padding: 1rem;
  font-family: ${props => props.theme.fonts.bebas};
  width: calc(33% - 8px);
  box-sizing: border-box;
`

export const Header = styled.header`
  display: flex;
`

export const Festival = styled.div`
  margin-left: auto;
  color: #fff;
  font-size: 2rem;
`
