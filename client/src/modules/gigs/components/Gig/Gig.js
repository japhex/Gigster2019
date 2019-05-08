import React, {useState} from 'react'
import './Gig.scss';
import GigHeader from './GigHeader/GigHeader'
import GigFooter from './GigFooter/GigFooter'
import GigTags from './GigTags/GigTags'
import UpdateGig from './UpdateGig'
import Loader from 'components/utils/Loader';

const Gig = ({gig, type, withoutCrud, loadingAdditionalContent}) => {
	const [editMode, setEditMode] = useState(false);

	const switchEditMode = () => {
		setEditMode(!editMode);
	}

	return (
		<li className="gig__card" data-test="component-gig">
			{editMode ?
				<UpdateGig initialValues={gig} switchEditMode={switchEditMode} />
			:
				<>
					<GigHeader gig={gig} type={type}/>
					{/*
						X other people on Gigster are attending this show!
						Can add this once we linked to actual songkick gig ID's rather than storing gigs internally..!!!
						Exciting.
					*/}
					{loadingAdditionalContent ?
						<Loader />
						:
						<>
						<GigTags gig={gig} />
						</>
					}
					{/* Only let user edit their gigs */}
					{!withoutCrud &&
						<GigFooter gigId={gig.id} switchEditMode={switchEditMode} />
					}
				</>
			}
		</li>
	)
}

export default Gig;