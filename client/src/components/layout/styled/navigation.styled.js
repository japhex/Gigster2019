import styled from 'styled-components'

export const ResponsiveMenu = styled.div`
  position: absolute;
  top: 76px;
  left: 0;
  height: 100vh;
  width: 50vw;
  display: ${props => (props.menuOpen ? 'block' : 'none')};
  background: ${props => props.theme.colors.primary};
`

export const Navbar = styled.ul`
  padding: 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
`

export const NavLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px 0;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: ${props => (props.active ? 'bold' : 'normal')};

    &:hover {
      font-weight: bold;
    }
  }
`

export const NavGroup = styled.div`
  width: 33%;
`
