import React from 'react'
import GigDelete from "./GigDelete"
import {Div} from './GigFooterStyled';
import {Buttons} from "components/utils/styled/ModalStyled"
import {Button, KIND, SIZE} from 'baseui/button'
import Overflow from 'baseui/icon/overflow'

const GigFooter = ({gigId, switchEditMode}) => {
	return (
		<Div>
			<Buttons>
				<Button kind={KIND.secondary} size={SIZE.compact} endEnhancer={() => <Overflow size={24} />} onClick={switchEditMode}>
					Edit
				</Button>
				<GigDelete gigId={gigId} />
			</Buttons>
		</Div>
	);
}

export default GigFooter;