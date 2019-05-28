import styled from 'styled-components';

export const UnauthenticatedLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: center;
	height:100vh;
	width:100vw;
	
	form {
		display: flex;
		align-items: center;
		justify-content: center;
	
		.form-control {
			margin:5px;
		}
	
		button {
			margin-left: 15px;
		}
	}
	
	.form-link {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`