import { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { Box } from '@chakra-ui/react'
import { getGigs, deleteGigMutation } from 'api/gigs/gigs'
import { DeleteGigContainer } from 'components/gigs/styles/delete.styled'
import Confirm from 'components/utils/alerts/confirm'


interface Props {
  id: string
}

const Delete = ({ id }: Props) => {
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
    deleteGigTrigger({ variables: { id } })
  }

  return (
    <DeleteGigContainer>
      <Box
        onClick={() => {
          handleDeleteClick()
        }}
      />
      <Confirm active={active} callbackConfirm={() => handleDeleteGig()} callbackCancel={() => setActive(false)} />
    </DeleteGigContainer>
  )
}

export default Delete
