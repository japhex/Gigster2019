import styled from 'styled-components'
import { theme } from 'themes/default'

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MonthList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 115px;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  max-height: 83vh;
  background: ${theme.colors.primary};
  padding: 14px 10px 10px 10px;
  color: ${theme.colors.white};
`

export const Month = styled.li`
  font-size: 1.5rem;
  padding: 10px 0;
`
