import styled from 'styled-components'

export const GigLayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;

  &:after {
    content: '';
    width: calc(34% - 20px);
  }
`
