import styled from 'styled-components';
import * as variables from 'components/utils/styles/global/variables'

export const Input = styled.input`
	font-family: system-ui;
	background-color: rgb(41, 41, 41);
	border: 1px solid rgb(41, 41, 41);
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0) 0px 2px 6px 0px;
	color: rgb(204, 204, 204);
	display: flex;
	font-size: 14px;
	font-weight: 400;
	height: 42px;
	line-height: 20px;
	padding:0 15px;
	margin-bottom: 10px;
	transition-duration: 0.25s;
	transition-property: border, boxShadow, backgroundColor;
	transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
	user-select: text;
	width:100%;
	-webkit-box-direction: normal;
	
	&:focus {
		outline:0;
		background-color: rgb(0, 0, 0);
		border: 1px solid rgb(40, 69, 122);
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`

export const Button = styled.button`
	font-family: system-ui;
	border-radius:4px;
	padding:12px;
	color:#fff;
	text-transform: uppercase;
	background: ${props => props.secondary ? `rgb(0, 0, 0)` : variables.brandColor };
	border: 0;
	cursor:pointer;
	
	&:focus, &:active {
		outline:0;
	}
	
	&:after {
		background: ${props => props.secondary ? `rgb(0, 0, 0)` : variables.brandColor };
		position: absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
		content: ${props => props.isLoading ? `loading` : props.children};
	}
`