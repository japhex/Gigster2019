import React from 'react'
import {Tabs, Tab} from 'japhex-ui';
import Search from "../searchResult/search"
import AddGigManual from "../display/addGigManual"
import {SearchModalStyled} from "../styles/searchResultsStyled"

const Create = ({addMode, handleCloseClick}) => (
	<SearchModalStyled modalActive={addMode} handleCloseClick={handleCloseClick}>
		<Tabs centered>
			<Tab label="Search for gig">
				<Search callback={handleCloseClick} />
			</Tab>
			<Tab label="Add gig manually">
				<AddGigManual callback={handleCloseClick} />
			</Tab>
		</Tabs>
    </SearchModalStyled>
)

export default Create;