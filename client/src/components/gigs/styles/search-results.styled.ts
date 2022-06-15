import styled from 'styled-components'
import { theme } from 'themes/default'

export const ResultsList = styled.div`
  height: 400px;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GigResult = styled.div`
  padding: 5px 0;
  cursor: pointer;
  border-bottom: 1px solid #cecece;
  width: 50%;

  &:last-child {
    border-bottom: 0;
  }
`

export const GigResultHeader = styled.div`
  display: flex;
  padding: 10px;
`

export const Bands = styled.div`
  flex: 1;
`

export const Band = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-family: ${theme.fonts.bebas};
  display: flex;
  align-items: center;
`

export const Date = styled.div`
  font-family: ${theme.fonts.bebas};
  color: #fff;
  font-size: 1.2rem;
`

export const GigResultFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
  padding: 5px 10px;
  color: #cecece;
  font-size: 0.7rem;
  text-transform: uppercase;
`

export const Venue = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #cecece;
  font-family: ${theme.fonts.bebas};
`

export const Location = styled.span`
  font-size: 1.4rem;
  line-height: 1.2rem;
  font-family: ${theme.fonts.bebas};
  color: #cecece;
`

export const Festival = styled.p`
  margin: 10px 0 0;
  color: #f44242;
  font-family: ${theme.fonts.bebas};
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  padding: 0 0 10px 10px;
`

export const SupportBand = styled.span`
  display: block;
  background: #333;
  color: #cecece;
  border: 1px solid #555;
  padding: 3px 4px 2px 4px;
  margin: 0 2px 4px;
  border-radius: 3px;
`
