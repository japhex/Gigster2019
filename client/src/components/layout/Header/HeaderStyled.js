import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
  top: 0;
  z-index: 1;
  padding:10px;
  background: #24292e;
	box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;

	> div {
		color:#fff;
		
		span {
			cursor: pointer;
		}
	}

	.navbar {
		> ul > li {
			position: relative;
			display: inline-flex;
			margin-right: 10px;
		}
	}
`

export const H1 = styled.h1`
	font-size:1.2rem;
	
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

export const UserDetailsSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size:0.8rem;
`

export const Username = styled.span`
	font-weight:bold;
`

export const Logout = styled.span`
	border-bottom:1px solid;
`

export const Divider = styled.span`
	display: block;
	margin:0 10px;
`

export const Navbar = styled.div`
	display:flex;
	align-items:center;
	justify-content: center;
	width:70%;
	
	ul {
		display:flex;
		width:80%;
		
		li {
			display:flex;
			align-items:center;
			justify-content: center;
			margin:0 5px;
			
			a {
				color:#fff;
				border-bottom: 1px solid;
				font-size: 0.8rem;
				text-transform: uppercase;
			}
		}
	}
	
	button {
		width:17%;
	}
`