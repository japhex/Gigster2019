import React from 'react'
import GigDelete from "./GigDelete"
import {Div} from './GigFooterStyled';
import {Buttons} from "components/utils/styled/ModalStyled"
import {Button, SIZE} from 'baseui/button'
import Overflow from 'baseui/icon/overflow'

const GigFooter = ({gigId, gigSource, switchEditMode}) => {
	return (
		<Div>
			<Buttons>
				{gigSource !== 'songkick' &&
					<Button size={SIZE.compact} endEnhancer={() => <Overflow size={24}/>} onClick={switchEditMode}>
						Edit
					</Button>
				}
				<GigDelete gigId={gigId} />
			</Buttons>
		</Div>
	);
}

export default GigFooter;