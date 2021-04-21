import React from 'react'

import Header from '../../../layout/header'

import { UsersLayoutContainer } from './UsersLayoutStyled'

const UsersLayout = ({ children }) => (
  <>
    <Header />
    <UsersLayoutContainer>{children}</UsersLayoutContainer>
  </>
)

export default UsersLayout
