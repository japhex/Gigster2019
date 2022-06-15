import styled from 'styled-components'

export const GigLayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: '';
    width: calc(34% - 20px);
  }
`

export const PageContainer = styled.div`
  padding: 20px;
`

export const Toolbar = styled.div`
  padding: 15px 0;
`
