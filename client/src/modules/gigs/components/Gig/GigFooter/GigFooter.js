import React from 'react'
import {Div} from '../../GigStyled/GigFooterStyled';
import {Buttons} from "components/utils/styled/ModalStyled"
import {Button} from 'components/utils/styled/Forms'

const GigFooter = ({songkickGig, switchEditMode}) => {
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

export default GigFooter;