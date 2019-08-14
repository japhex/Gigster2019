import React, {useState, useEffect} from 'react'
import {StarRating} from 'baseui/rating';
import {Mutation} from "react-apollo"
import {rateGigMutation} from "../../../../api/ratings/ratings"

const GigRating = ({gigId, activeRating}) => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (activeRating) {
			setGigRating(activeRating)
		}
	}, [activeRating])

	const setGigRating = (rating) => {
		setValue(rating);
	}

	return (
		<Mutation mutation={rateGigMutation}>
			{(rateGig) => (
				<StarRating
					value={value}
					onChange={({value}) => {
						rateGig({variables: {id: gigId, rating: value}})
						setGigRating(value)
					}}
				/>
			)}
		</Mutation>
	)
}

export default GigRating;