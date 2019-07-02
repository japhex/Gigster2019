import styled from 'styled-components';

export const UserList = styled.ul`
	display: ${props => (props.users.length > 0) ? 'block' : 'none'};
    position: absolute;
	top: 43px;
	width:100%;
	box-sizing: border-box;
	background: #222;
	box-shadow: 0px 3px 13px 0px rgba(0,0,0,0.75);
	
	li {
		display: block;
		padding:15px 20px;
		cursor:pointer;
		
		&:hover {
			background:#444;
		}
		
		a {
			display: block;
			color:#fff;
		}
	}
`