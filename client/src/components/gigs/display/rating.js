import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { StarRating } from 'baseui/rating'
import { rateGigMutation } from '../../../api/ratings/ratings'

const Rating = ({ gigId, activeRating }) => {
  const [value, setValue] = useState(0)
  const [rateGig] = useMutation(rateGigMutation)

  useEffect(() => {
    if (activeRating) {
      setGigRating(activeRating)
    }
  }, [activeRating])

  const setGigRating = rating => {
    setValue(rating)
  }

  return (
    <StarRating
      value={value}
      onChange={({ value }) => {
        rateGig({ variables: { id: gigId, rating: value } })
        setGigRating(value)
      }}
    />
  )
}

export default Rating
