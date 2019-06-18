import styled from 'styled-components';

export const UserList = styled.ul`
	display: ${props => (props.users.length > 0) ? 'block' : 'none'};
    position: absolute;
	top: 43px;
	width:100%;
	padding: 15px;
	box-sizing: border-box;
	background: #222;
	
	li {
		display: block;
		padding:5px 0;
		
		a {
			display: block;
			color:#fff;
		}
	}
`