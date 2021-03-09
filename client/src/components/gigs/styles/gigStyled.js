import styled from 'styled-components'
import { StarRating } from 'baseui/rating'

export const GigContainer = styled.div`
  width: 49%;
  margin: 5px 10px 5px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:nth-child(2) {
    margin-right: 0;
  }
`

export const GigStyled = styled.div`
  position: relative;
  min-height: 270px;
`

export const TicketLeft = styled.div`
  flex: 3;
`

export const TicketBottom = styled.div``

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #fff;
  padding: 5px 5px 10px 5px;
  min-height: 130px;

  h1 {
    margin: 15px 0;
    font-size: 2.2rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 2rem;
    letter-spacing: -0.02rem;
  }
`

export const PopularityContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  text-transform: lowercase;
  color: #999;
`

export const Popularity = styled.div`
  height: 5px;
  background: rgba(58, 253, 45, 1);
  border: 1px solid #999;
  width: ${props => props.popularityAmount}%;
  margin-left: 10px;
`

export const Details = styled.div`
  display: flex;
`

export const VenueStyled = styled.div``

export const ArtistName = styled.h1`
  font-size: 2rem;
  padding: 28px 0 20px 0;
  font-family: ${props => props.theme.fonts.bebas};
`
