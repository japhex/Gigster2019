import styled from 'styled-components'
import { theme } from 'themes/default'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(122, 122, 122, 0.44);
`

export const ModalStyled = styled.div`
  background: ${theme.colors.primary};
  width: 45vw;
  height: auto;
  font-size: 14px;

  @media ${theme.breakpoints.tabletDown} {
    width: 98%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom: 1px solid #555;
  font-weight: 500;
  font-size: 16px;
`

export const Content = styled.div`
  padding: 30px;
`
