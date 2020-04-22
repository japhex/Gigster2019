import styled from 'styled-components'
import * as variables from 'components/utils/styles/global/variables'
import Delete from 'baseui/icon/delete'

export const DeleteGigContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;

  svg {
    height: 20px;
    fill: #fff;
  }
`

export const DeleteIcon = styled(Delete)`
  margin-left: auto;
`
