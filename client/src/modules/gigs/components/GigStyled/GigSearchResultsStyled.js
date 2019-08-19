import styled from 'styled-components';

export const ResultsList = styled.div`
	margin-top:20px;
	height:60vh;
	overflow-x:scroll;
`

export const GigResult = styled.div`
	margin-bottom:15px;
	background:#fff;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor:pointer;
    
	&:hover {
        background:#ccc;
    }
`

export const GigResultHeader = styled.div`
    display:flex;
    align-items:baseline;
    padding: 10px;
`

export const Bands = styled.div`
	flex:1;

    h1 {
        font-size:1rem;
        color:#000;
        display: flex;
        align-items: center;
    }
    
    span {
        font-size:0.8rem;
    }
`

export const Date = styled.div`
	color:#000;
`

export const GigResultFooter = styled.div`
    margin-top: 6px;
    padding: 5px 10px;
	background: #eee;
    color: #666;
    font-size: 0.7rem;
    text-transform: uppercase;
    
	// THIS IS HORRIBLE.
	${GigResult}:hover & {
        background:#ccc;
    }
`

export const Venue = styled.div`
	text-transform: uppercase;
	font-size:0.8rem;
	color:#555;
`

export const Location = styled.span`
	font-size:0.8rem;
    line-height: 0.8rem;
`

export const Strong = styled.strong`
	font-weight:bold;
`

export const Festival = styled.p`
	margin-left:auto;
    color: #f44242;
    letter-spacing: 0.1rem;
`