import React from 'react'
import {Modal, ModalBody} from 'baseui/modal';
import {StatefulTabs, Tab} from 'baseui/tabs';
import SearchForGig from "../components/Gig/SearchForGig"
import AddManualGig from "../components/Gig/AddManualGig"
import {CustomTabs} from './CreateGigStyled'

const CreateGig = ({addMode, callback}) => (
    <Modal isOpen={addMode}>
        <ModalBody>
	        <CustomTabs>
		        <StatefulTabs initialState={{activeKey: '0'}}>
			        <Tab title="Search for gig">
						<SearchForGig callback={callback} />
			        </Tab>
			        <Tab title="Add gig manually">
						<AddManualGig callback={callback} />
			        </Tab>
		        </StatefulTabs>
	        </CustomTabs>
        </ModalBody>
    </Modal>
)

export default CreateGig;