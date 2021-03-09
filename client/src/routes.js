import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GigLayout from './components/ui/layout/GigLayout/GigLayout'
import UsersLayout from './components/ui/layout/UsersLayout/UsersLayout'
import UsersHome from './components/users/pages/users'
import UsersSpotifyTopTracks from './components/users/pages/usersSpotifyTopTracks'
import UserPage from './components/users/pages/user'
import SpotifyWrapper from './components/layout/pages/spotifyWrapper'
import GigsUpcoming from './pages/gigs-new'
import GigsPast from './pages/gigs-past'
import Create from './pages/create'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import { PrivateRoute } from './utils/auth'

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/" component={GigsUpcoming} layout={GigLayout} />
    <PrivateRoute
      exact
      path="/gigs/upcoming"
      component={GigsUpcoming}
      layout={GigLayout}
    />
    <PrivateRoute
      exact
      path="/gigs/past"
      component={GigsPast}
      layout={GigLayout}
    />
    <PrivateRoute
      exact
      path="/gigs/create"
      component={Create}
      layout={GigLayout}
    />
    <PrivateRoute
      exact
      path="/users"
      component={UsersHome}
      layout={UsersLayout}
    />
    <PrivateRoute
      exact
      path="/users/:username"
      component={UserPage}
      layout={UsersLayout}
    />
    <PrivateRoute
      exact
      path="/users/spotify/top-tracks"
      component={UsersSpotifyTopTracks}
      layout={UsersLayout}
    />
    <PrivateRoute
      exact
      path="/spotify/callback"
      component={SpotifyWrapper}
      layout={GigLayout}
    />
  </Switch>
)
