import React from 'react'

import Search from '../components/gigs/searchResult/search'
import { Modal } from '../components/ui/modal'

const Create = ({ addMode, handleCloseClick }) => (
  <Modal modalActive={addMode} handleCloseClick={handleCloseClick}>
    <Search />
    {/*		<Tab label="Add gig manually"> */}
    {/*			<AddGigManual callback={handleCloseClick} /> */}
    {/*		</Tab> */}
  </Modal>
)

export default Create
