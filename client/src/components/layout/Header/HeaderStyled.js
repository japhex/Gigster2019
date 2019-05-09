import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	border-bottom:1px solid #eee;
	padding:20px;

	> div {
		display: flex;
		margin-left:auto;

		span {
			cursor: pointer;
		}
	}

	.header__user {
		margin-right: 10px;
	}

	.navbar {
		li {
			display: inline-flex;
			margin-right: 10px;
		}
	}
`