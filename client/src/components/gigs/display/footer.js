import React from 'react'
import {Div} from '../styles/footerStyled';
import {Buttons} from "components/utils/styles/modalStyled"
import {Button} from 'components/utils/styles/formsStyled'

const Footer = ({songkickGig, switchEditMode}) => {
	return (
		<Div>
			<Buttons>
				{!songkickGig &&
					<Button onClick={switchEditMode}>
						Edit
					</Button>
				}
			</Buttons>
		</Div>
	);
}

export default Footer;