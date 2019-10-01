import React from 'react'
import {Modal, ModalBody} from 'baseui/modal';
import {StatefulTabs, Tab} from 'baseui/tabs';
import SearchForGig from "../components/Gig/SearchForGig"
import AddManualGig from "../components/Gig/AddManualGig"
import {CreateGigModal} from "../components/GigStyled/GigCreateStyled"
import SimpleModal from "../../../components/utils/modals/Simple"

const CreateGig = ({addMode, callback}) => (
	<>
	    <CreateGigModal isOpen={addMode}>
	        <ModalBody>
		        <StatefulTabs initialState={{activeKey: '0'}}>
			        <Tab title="Search for gig">
						<SearchForGig callback={callback} />
			        </Tab>
			        <Tab title="Add gig manually">
						<AddManualGig callback={callback} />
			        </Tab>
		        </StatefulTabs>
	        </ModalBody>
	    </CreateGigModal>
		<SimpleModal modalActive={addMode} />
	</>
)

export default CreateGig;