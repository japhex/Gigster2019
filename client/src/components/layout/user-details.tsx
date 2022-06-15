import { useContext } from 'react'

import UserContext from 'context/user/context'
import useReactRouter from 'use-react-router'
import { logoutUser } from 'utils/auth'

import { UserDetailsSection, Username, Logout, Divider } from './styled/header.styled'

const UserDetails = () => {
  const { history } = useReactRouter()
  const userContext = useContext(UserContext)
  const { user } = userContext

  return (
    <UserDetailsSection>
      <Username>{user.username}</Username>
      <Divider>|</Divider>
      <Logout onClick={() => logoutUser(history)}>logout</Logout>
    </UserDetailsSection>
  )
}

export default UserDetails
