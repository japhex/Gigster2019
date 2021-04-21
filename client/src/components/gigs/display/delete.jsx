import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'

import { getGigs, deleteGigMutation } from '../../../api/gigs/gigs'
import { IconCloseStyled } from '../../ui/modal/styling'
import Confirm from '../../utils/alerts/confirm'
import { DeleteGigContainer } from '../styles/deleteStyled'

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
      <IconCloseStyled
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
