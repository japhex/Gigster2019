import React from 'react'
import { Portal } from 'react-portal'
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
      <Portal>
        <ModalContainer>
          <ModalStyled {...props}>
            <ModalHeader>
              <IconCloseStyled onClick={handleCloseClick} />
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalStyled>
        </ModalContainer>
      </Portal>
    )
  )
}
