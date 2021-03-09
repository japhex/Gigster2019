import styled from 'styled-components'
import { Modal } from 'components/ui/modal'

export const ConfirmModal = styled(Modal)`
  > div {
    height: 150px;
    display: flex;
    flex-direction: column;
  }
`

export const Buttons = styled.div`
  margin-top: auto;

  button {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  line-height: 0rem;

  span {
    margin-left: 5px;
  }
`
