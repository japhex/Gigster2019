import styled from 'styled-components';

export const GigContainer = styled.div`
	width: ${props => props.type === 'old' ? '100%' : '49%'};
    margin:5px 10px 0 0;
    margin-right: ${props => props.type === 'old' && 0};
    box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;
    
    &:nth-child(2) {
        margin-right: 0;
    }
`

export const GigStyled = styled.div`
	background:#222;
`

export const Ticket = styled.div`
	display:flex;
	position: relative;
	padding:5px;
	color:#fff;
	
	
	div {
		//background:;
	}
	
	h1, h2 {
		margin:5px 0;
	}
`

export const TicketLeft = styled.div`
	flex:3;
`

export const Support = styled.div`
	text-align: center;
	align-items: center;
	font-size:0.8rem;
	padding:10px;
	
	p {
		font-weight:bold;
	}
`

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom:2px solid #fff;
	padding:5px 5px 10px 5px;
	
	h1 {
		margin: 15px 0;
	    font-size: 2.2rem;
	    text-transform: uppercase;
	    text-align: center;
	    line-height: 2rem;
	    letter-spacing: -0.02rem;
	}
`

export const Popularity = styled.div`
	height:5px;
	background: linear-gradient(95deg, rgba(195,34,34,1) 0%, rgba(141,146,40,1) 51%, rgba(58,253,45,1) 100%);
	border:1px solid #999;
	width: ${props => props.popularityAmount}%;
`

export const Details = styled.div`
	display:flex;
`

export const Date = styled.div`
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

export const Venue = styled.div`
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