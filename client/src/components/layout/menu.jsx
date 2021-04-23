import React, { useContext, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import AppContext from '../../context/app/context'
import SpotifyContext from '../../context/spotify/spotifyContext'
import useOutsideClick from '../../hooks/useOutsideClick'
import Create from '../../pages/create'
import { theme } from '../../themes/default'

import { MenuIconStyled, CloseIconStyled } from './styled/HeaderStyled'
import { Navbar, NavLink, ResponsiveMenu } from './styled/navigation.styled'

const Menu = () => {
  const ref = useRef()
  const { scroll, setScroll } = useContext(AppContext)
  const { location } = useReactRouter()
  const spotifyContext = useContext(SpotifyContext)
  const { authenticated } = spotifyContext
  const [addGigActive, setAddGigActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const currentLocation = location.pathname

  const handleAddGig = e => {
    e.preventDefault()
    setAddGigActive(!addGigActive)
  }

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
            <Link to="/gigs/upcoming">Upcoming gigs</Link>
          </NavLink>
          <NavLink active={currentLocation === '/gigs/past'}>
            <Link to="/gigs/past">Past gigs</Link>
          </NavLink>
          <NavLink>
            <span onClick={e => handleAddGig(e)}>Add gig</span>
          </NavLink>
          {authenticated && (
            <li>
              <Link to="/users/spotify/top-tracks">Most Listened to</Link>
            </li>
          )}
          <Create
            addMode={addGigActive}
            handleCloseClick={e => handleAddGig(e)}
          />
          {/* <Search /> */}
        </Navbar>
      </ResponsiveMenu>
    </>
  )
}

export default Menu
