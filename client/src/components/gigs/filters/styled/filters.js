import styled from 'styled-components'

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const MonthList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 50vw;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.white};
  padding: 14px 10px 10px 10px;
  color: ${props => props.theme.colors.white};
`
