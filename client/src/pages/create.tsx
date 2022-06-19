import Search from 'components/search/search'
import {
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  Modal,
  Button,
  Box,
  Center,
} from '@chakra-ui/react'

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center>
      <Button variant="outline" colorScheme="yellow" onClick={onOpen}>
        Add gig
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Search />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  )
}

export default Create
