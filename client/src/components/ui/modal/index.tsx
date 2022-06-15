import { useEffect } from 'react'

import { CloseIcon } from 'components/ui/icons/close'
import { Container, ModalStyled, Title, Content } from 'components/ui/modal/styled/modal.styled'

const Modal = ({ visible, title, children, close }) => {
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'visible'
  }, [visible])

  return visible ? (
    <Container>
      <ModalStyled>
        <Title>
          <span>{title}</span>
          <CloseIcon style={{ marginLeft: 'auto' }} onClick={close} />
        </Title>
        <Content>{children}</Content>
      </ModalStyled>
    </Container>
  ) : null
}

export default Modal
