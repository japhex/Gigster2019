import React, { useContext } from 'react'
import useReactRouter from 'use-react-router'
import { isEmpty } from 'lodash'
import {
  UserDetailsSection,
  Username,
  Logout,
  Divider,
} from './styled/HeaderStyled'
import { logoutUser } from 'utils/auth'
import UserContext from '../../../context/user/userContext'

const UserDetails = () => {
  const { history } = useReactRouter()
  const userContext = useContext(UserContext)
  const { user } = userContext

  console.log(user)

  return (
    <UserDetailsSection>
      {!isEmpty(user) && (
        <>
          <Username>{user.username}</Username>
          <Divider>|</Divider>
          <Logout onClick={() => logoutUser(history)}>logout</Logout>
        </>
      )}
    </UserDetailsSection>
  )
}

export default UserDetails
