import { useContext, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import {
  MenuIconStyled,
  CloseIconStyled,
} from 'components/layout/styled/HeaderStyled'
import {
  Navbar,
  NavLink,
  ResponsiveMenu,
} from 'components/layout/styled/navigation.styled'
import AppContext from 'context/app/context'
import SpotifyContext from 'context/spotify/spotifyContext'
import useOutsideClick from 'hooks/useOutsideClick'
import { theme } from 'themes/default'

const Menu = () => {
  const ref = useRef()
  const { scroll, setScroll } = useContext(AppContext)
  const { location } = useReactRouter()
  const spotifyContext = useContext(SpotifyContext)
  const { authenticated } = spotifyContext
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

  useOutsideClick(ref, handleOutsideClick)

  return (
    <>
      {menuOpen ? (
        <CloseIconStyled fill={theme.colors.white} onClick={handleMenuClick} />
      ) : (
        <MenuIconStyled fill={theme.colors.white} onClick={handleMenuClick} />
      )}
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
          {authenticated && (
            <li>
              <Link to="/users/spotify/top-tracks">Most Listened to</Link>
            </li>
          )}
          {/* <Search /> */}
        </Navbar>
      </ResponsiveMenu>
    </>
  )
}

export default Menu
