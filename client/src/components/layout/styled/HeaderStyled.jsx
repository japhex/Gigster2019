import styled from 'styled-components'

import { CloseIcon } from 'components/ui/icons/close'
import { MenuIcon } from 'components/ui/icons/menu'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 0;
  font-family: ${props => props.theme.fonts.bebas};
  padding: 16px 10px 10px;
  background: #24292e;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  a {
    font-family: ${props => props.theme.fonts.bebas};
    font-weight: 800;
    color: #fff;
  }
`

export const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

export const UserDetailsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.4rem;
  margin-left: auto;
  color: #fff;
`

export const Username = styled.span`
  font-weight: bold;
`

export const Logout = styled.span`
  border-bottom: 1px solid;
`

export const Divider = styled.span`
  display: block;
  margin: 0 10px;
`

const Menu = styled(MenuIcon)`
  width: 25px;
  height: 25px;
  fill: ${props => props.theme.colors.white};
  cursor: pointer;
`

const Close = styled(CloseIcon)`
  width: 25px;
  height: 25px;
  fill: ${props => props.theme.colors.white};
  cursor: pointer;
`

export const MenuIconStyled = props => <Menu {...props} />
export const CloseIconStyled = props => <Close {...props} />
