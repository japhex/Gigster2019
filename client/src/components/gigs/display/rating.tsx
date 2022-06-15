import { useState, useEffect } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { rateGigMutation } from 'api/ratings/ratings'
import { StarRating } from 'baseui/rating'

interface Props {
  gigId: string
  activeRating: number
}

const Rating = ({ gigId, activeRating }: Props) => {
  const [value, setValue] = useState<number>(0)
  const [rateGig] = useMutation(rateGigMutation)

  useEffect(() => {
    if (activeRating) {
      setGigRating(activeRating)
    }
  }, [activeRating])

  const setGigRating = (rating: number) => {
    setValue(rating)
  }

  return (
    <StarRating
      value={value}
      // @ts-ignore
      onChange={async ({ rating }: { rating: number }) => {
        await rateGig({ variables: { id: gigId, rating } })
        setGigRating(rating)
      }}
    />
  )
}

export default Rating
