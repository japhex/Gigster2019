import React, { useContext } from 'react'

import useReactRouter from 'use-react-router'

import UserContext from '../../context/user/userContext'
import { logoutUser } from '../../utils/auth'

import {
  UserDetailsSection,
  Username,
  Logout,
  Divider,
} from './styled/HeaderStyled'

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
