import React from 'react'

import {GigResult} from '../Gig/GigSearchResultsStyled'
import GigResultHeaderParent from "./GigResultHeader"
import GigResultFooterParent from "./GigResultFooter"

const GigResultParent = ({gig}) => {
	const saveGig = () => {
		// save gig
	}

	return (
		<GigResult onClick={saveGig}>
			<GigResultHeaderParent gig={gig} />
			<GigResultFooterParent gig={gig} />
		</GigResult>
	)
}

export default GigResultParent;