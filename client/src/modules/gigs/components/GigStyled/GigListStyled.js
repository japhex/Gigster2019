import styled from 'styled-components';

export const GigListContainer = styled.div`
	padding:20px;
	width: ${props => props.type === 'old' ? '20%' : '80%'};
`

export const Ul = styled.div`
	display: flex;
	flex-wrap:wrap;
`

export const H1 = styled.div`
    display: flex;
    align-items: center;
	font-size: 1rem;
	text-transform: uppercase;
	color: #666;
	padding-left: 10px;
	padding-bottom: 20px;
	border-bottom:1px solid;
	margin-bottom:15px;
	
	h2 {
		margin-left:auto;
		font-size: 1rem;
	}
`

export const Pill = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
	background:${props => props.primary ? '#ba3b2d' : 'none'};
	border-radius:5px;
	color:#fff;
	padding:3px 5px;
`