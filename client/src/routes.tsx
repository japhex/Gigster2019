import Login from 'components/auth/login'
import Signup from 'components/auth/signup'
import GigLayout from 'components/ui/layout/GigLayout/gig-layout'
import UsersLayout from 'components/ui/layout/UsersLayout/user-layout'
import UserPage from 'components/users/pages/user'
import UsersHome from 'components/users/pages/users'
import Create from 'pages/create'
import GigsUpcoming from 'pages/gigs-new'
import GigsPast from 'pages/gigs-past'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'utils/auth'

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/" component={GigsUpcoming} layout={GigLayout} />
    <PrivateRoute exact path="/gigs/upcoming" component={GigsUpcoming} layout={GigLayout} />
    <PrivateRoute exact path="/gigs/past" component={GigsPast} layout={GigLayout} />
    <PrivateRoute exact path="/gigs/create" component={Create} layout={GigLayout} />
    <PrivateRoute exact path="/users" component={UsersHome} layout={UsersLayout} />
    <PrivateRoute exact path="/users/:username" component={UserPage} layout={UsersLayout} />
  </Switch>
)
