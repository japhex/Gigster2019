import styled from 'styled-components';

export const UnauthenticatedLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height:100vh;
	background:#f5f7fa;
	
	form {
		display:flex;
		background:#fff;
		flex-direction: column;
		width:30vw;
		padding:20px;
		border:1px solid #ccd2d8;
		border-radius:3px;
		margin-top:15px;
	
		.form-control {
			margin:5px;
		}
	
		button {
			margin-top: 15px;
		}
		
		small {
			margin-top:30px;
			border-top:1px solid #ccc;
			padding-top:15px;
		}
	}
	
	.form-link {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`