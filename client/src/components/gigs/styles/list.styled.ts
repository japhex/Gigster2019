import styled from 'styled-components'

export const TabLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const H1 = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  color: #666;
  padding-left: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  margin-bottom: 15px;

  h2 {
    margin-left: auto;
    font-size: 1rem;
  }
`

export const Pill = styled.span<{ primary: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ primary }) => (primary ? '#ba3b2d' : 'none')};
  border-radius: 5px;
  color: #fff;
  padding: 0 5px;
  margin-left: 5px;
`
