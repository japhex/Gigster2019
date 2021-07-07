import styled from 'styled-components'

import { CloseIcon } from 'components/ui/icons/close'
import { theme } from 'themes/default'

export const ModalContainer = styled.div`
  display: flex;
  background: ${theme.colors.modalBg};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-family: arial;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  background: ${theme.colors.primary};
  border-radius: 3px 3px 5px 5px;
  box-shadow: ${theme.colors.dropShadow} 0px 1px 4px;
`

export const IconCloseStyled = styled(CloseIcon)`
  fill: #000;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: auto;
`

export const ModalContent = styled.div`
  padding: 0 15px 15px 15px;
`

export const ModalHeader = styled.header`
  display: flex;
  padding: 5px 5px 0;
`

export const ModalStyled = props => <Modal {...props} />
