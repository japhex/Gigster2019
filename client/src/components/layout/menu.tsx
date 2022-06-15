import { useContext, useRef, useState } from 'react'

import { MenuIconStyled, CloseIconStyled } from 'components/layout/styled/header.styled'
import { Navbar, NavLink, ResponsiveMenu } from 'components/layout/styled/navigation.styled'
import AppContext from 'context/app/context'
import useOutsideClick from 'middleware/hooks/useOutsideClick'
import { Link } from 'react-router-dom'
import { theme } from 'themes/default'
import useReactRouter from 'use-react-router'

const Menu = () => {
  const ref = useRef()
  // @ts-ignore
  const { scroll, setScroll } = useContext(AppContext)
  const { location } = useReactRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const currentLocation = location.pathname

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
    setScroll(!scroll)
  }

  const handleOutsideClick = () => {
    setMenuOpen(false)
    setScroll(true)
  }

  useOutsideClick({ ref, callback: handleOutsideClick })

  return (
    <>
      {menuOpen ? (
        <CloseIconStyled fill={theme.colors.white} onClick={handleMenuClick} />
      ) : (
        <MenuIconStyled fill={theme.colors.white} onClick={handleMenuClick} />
      )}
      {/* @ts-ignore */}
      <ResponsiveMenu menuOpen={menuOpen} ref={ref}>
        <Navbar>
          {/* Need to make re-usable component for these with paths */}
          <NavLink active={currentLocation === '/gigs/upcoming'}>
            <Link to="/gigs/upcoming">
              <span onClick={handleOutsideClick}>Upcoming gigs</span>
            </Link>
          </NavLink>
          <NavLink active={currentLocation === '/gigs/past'}>
            <Link to="/gigs/past">
              <span onClick={handleOutsideClick}>Past gigs</span>
            </Link>
          </NavLink>
          {/* <Search /> */}
        </Navbar>
      </ResponsiveMenu>
    </>
  )
}

export default Menu
