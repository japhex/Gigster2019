import { SyntheticEvent, useState } from 'react'

import { Toolbar } from 'components/layout/styled/gig-layout.styled'
import Search from 'components/search/search'
import { Button } from 'components/ui/forms/button'
import Modal from 'components/ui/modal'

const Create = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleClose = (e: SyntheticEvent) => {
    e.preventDefault()
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Toolbar>
      <Button onClick={handleClose}>Add gig</Button>
      <Modal title="" visible={isModalVisible} close={handleClose}>
        <Search />
      </Modal>
    </Toolbar>
  )
}

export default Create
