import React, {useState} from 'react'
import './Gig.scss';
import UpdateGig from './UpdateGig'
import DisplayGig from "./DisplayGig"

const Gig = ({gig, type, withoutCrud}) => {
	const [editMode, setEditMode] = useState(false);

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<li className="gig__card" data-test="component-gig">
			{editMode ?
				<UpdateGig initialValues={gig} switchEditMode={switchEditMode} />
			:
				<DisplayGig gig={gig} type={type} withoutCrud={withoutCrud} switchEditMode={switchEditMode} />
			}
		</li>
	)
}

export default Gig;