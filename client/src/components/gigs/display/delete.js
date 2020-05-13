import React, { useState } from 'react'
import { IconClose } from 'japhex-ui'
import { useMutation } from '@apollo/react-hooks'
import { getGigs, deleteGigMutation } from 'api/gigs/gigs'
import { DeleteGigContainer } from '../styles/deleteStyled'
import Confirm from 'components/utils/alerts/confirm'

const Delete = ({ gigId }) => {
  const [active, setActive] = useState(false)
  const [deleteGigTrigger] = useMutation(deleteGigMutation, {
    update(cache, { data: { deleteGig } }) {
      cache.writeQuery({ query: getGigs, data: { gigs: deleteGig } })
    },
  })

  const handleDeleteClick = () => {
    setActive(true)
  }

  const handleDeleteGig = () => {
    deleteGigTrigger({ variables: { id: gigId } })
  }

  return (
    <DeleteGigContainer>
      <IconClose
        onClick={() => {
          handleDeleteClick()
        }}
      />
      <Confirm
        active={active}
        callbackConfirm={() => handleDeleteGig()}
        callbackCancel={() => setActive(false)}
      />
    </DeleteGigContainer>
  )
}

export default Delete
