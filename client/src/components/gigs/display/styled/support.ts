import styled from 'styled-components'

export const Title = styled.p<{ empty?: boolean }>`
  padding-top: ${({ empty }) => (empty ? '20px' : '0')};
  margin-bottom: ${({ empty }) => (empty ? '15px' : '10px')};
`

export const Band = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 0.9rem;
  background: #ff706b;
  padding: 3px 4px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px 5px 0;
`
