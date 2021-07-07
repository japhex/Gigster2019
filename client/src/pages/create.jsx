import { useState } from 'react'

import Search from 'components/search/search'
import { Button } from 'components/ui/forms/button'
import { Modal } from 'components/ui/modal'

const Create = () => {
  const [addGigActive, setAddGigActive] = useState(false)

  const handleAddGig = e => {
    e.preventDefault()
    setAddGigActive(!addGigActive)
  }

  return (
    <>
      <Button onClick={handleAddGig}>Add gig</Button>
      <Modal modalActive={addGigActive} handleCloseClick={handleAddGig}>
        <Search />
      </Modal>
    </>
  )
}

export default Create
