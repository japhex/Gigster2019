import {
  ModalContainer,
  ModalStyled,
  ModalHeader,
  ModalContent,
  IconCloseStyled,
} from './styling'

export const Modal = props => {
  const { modalActive, children, handleCloseClick } = props

  return (
    modalActive && (
      <ModalContainer>
        <ModalStyled {...props}>
          <ModalHeader>
            <IconCloseStyled onClick={handleCloseClick} />
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ModalStyled>
      </ModalContainer>
    )
  )
}
