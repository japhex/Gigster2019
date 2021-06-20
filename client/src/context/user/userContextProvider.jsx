import React from 'react'

import { useQuery } from '@apollo/react-hooks'

import { getLoggedInUser } from 'api/users/users'
import { UserProvider } from 'context/user/userContext'

const UserProviderWrapper = ({ children }) => {
  const { loading, error, data } = useQuery(getLoggedInUser)

  return (
    <UserProvider value={{ user: loading || error ? {} : data.loggedInUser }}>
      {children}
    </UserProvider>
  )
}

export default UserProviderWrapper
