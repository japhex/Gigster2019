import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;
	padding:20px;

	> div {
		color:#fff;
		
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
		color:#fff;
	}	
`

export const SearchBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right:10px;
`