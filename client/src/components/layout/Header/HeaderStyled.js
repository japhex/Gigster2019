import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom:1px solid #eee;
	padding:20px;

	> div {
		span {
			cursor: pointer;
		}
	}

	.navbar {
		li {
			display: inline-flex;
			margin-right: 10px;
		}
	}
`

export const H1 = styled.h1`
	a {
		color:#000;
	}	
`