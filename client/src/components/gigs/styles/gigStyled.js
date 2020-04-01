import styled from 'styled-components';
import {StarRating} from 'baseui/rating'

export const GigContainer = styled.div`
	width: 49%;
    margin: 5px 10px 5px 0;
    box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;
    
    &:nth-child(2) {
        margin-right: 0;
    }
`

export const GigStyled = styled.div`
	position: relative;
	min-height:270px;
`

export const Ticket = styled.div`
	display:flex;
	flex-direction:column;
	position: relative;
	padding: 5px;
	color:#444;
	
	h1, h2 {
		margin:5px 0;
	}
`

export const TicketLeft = styled.div`
	flex:3;
`

export const TicketBottom = styled.div`

`

export const SupportStyled = styled.div`
	text-align: center;
	align-items: center;
	font-size:0.8rem;
	padding:10px;
	
	p {
		font-weight:bold;
		margin-bottom:5px;
	}
	
	span {
		color:#ccc;
	}
`

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom:2px solid #fff;
	padding: 5px 5px 10px 5px;
	min-height:130px;
	
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
	display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    text-transform: lowercase;
    color:#999;
`

export const Popularity = styled.div`
	height:5px;
	background: rgba(58,253,45,1);
	border:1px solid #999;
	width: ${props => props.popularityAmount}%;
	margin-left:10px;
`

export const Details = styled.div`
	display:flex;
`

export const DateStyled = styled.div`
	flex:1;
	text-transform: uppercase;
	border-right:2px dotted #fff;
	padding:10px;
`

export const Month = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom:10px;
	font-size:1.1rem;
`

export const Day = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size:2.5rem;
	margin-bottom:10px;
	font-weight:bold;
`

export const Year = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size:1.1rem;
`

export const VenueStyled = styled.div`
	flex:5;
	padding:10px;
	
	strong {
		font-weight: bold;
	}
	
	i {
		display: block;
	}
`

export const Time = styled.div`
	margin-top:15px;
`

export const ArtistName = styled.h1`
	text-align: center;
	font-size: 1.2rem;
    padding-top: 10px;
	text-transform: uppercase;
	margin-bottom:10px;
`

export const Festival = styled.div`
	font-size:2rem;
`