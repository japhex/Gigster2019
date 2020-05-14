import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, H1, Navbar } from './styled/HeaderStyled'
import Create from '../../gigs/pages/create'
// import Search from 'components/users/user/search'
import UserDetails from './UserDetails'
import SpotifyUser from './SpotifyUser'
import SpotifyContext from '../../../context/spotify/spotifyContext'

const AppHeader = () => {
  const spotifyContext = useContext(SpotifyContext)
  const { authenticated } = spotifyContext
  const [addGigActive, setAddGigActive] = useState(false)

  const handleAddGig = (e) => {
    e.preventDefault()
    setAddGigActive(!addGigActive)
  }

  return (
    <Header>
      <H1>
        <Link to="/">Gigster</Link>
      </H1>
      <Navbar>
        <ul>
          <li>
            <Link to="/gigs/upcoming">Upcoming gigs</Link>
          </li>
          <li>
            <Link to="/gigs/past">Past gigs</Link>
          </li>
          <li>
            <a href="#" onClick={(e) => handleAddGig(e)}>
              Add gig
            </a>
          </li>
          {authenticated && (
            <li>
              <Link to="/users/spotify/top-tracks">Most Listened to</Link>
            </li>
          )}
        </ul>
        <Create
          addMode={addGigActive}
          handleCloseClick={(e) => handleAddGig(e)}
        />
        {/*<Search />*/}
      </Navbar>
      <SpotifyUser />
      <UserDetails />
    </Header>
  )
}

export default AppHeader
