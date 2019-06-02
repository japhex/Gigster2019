import React, {useState} from 'react'
import {StarRating} from 'baseui/rating';

const GigRating = () => {
	const [value, setValue] = useState(0);

	const setGigRating = (rating) => {
		setValue(rating);
	}

	return (
		<StarRating
			value={value}
			onChange={({value}) => setGigRating(value)}
		/>
	)
}

export default GigRating;